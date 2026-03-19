const express  = require('express');
const multer   = require('multer');
const Medicine = require('../models/Medicine');
const { protect, authorise } = require('../middleware/auth');

const router  = express.Router();

// Multer config for scan uploads (memory storage — base64 sent to Claude API)
const upload  = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } });

// ══ GET /api/medicines ════════════════════════════════════════
// All roles can read
router.get('/', protect, async (req, res) => {
  try {
    const { risk, category, facility, search, page = 1, limit = 50 } = req.query;
    const filter = {};

    if (risk)     filter.riskLevel  = risk;
    if (category) filter.category   = category;
    if (facility) filter.facility   = new RegExp(facility, 'i');
    if (search)   filter.name       = new RegExp(search, 'i');

    // Pharmacy staff only see their own facility's medicines
    if (req.user.role === 'pharmacy' && req.user.pharmacy?.storeName) {
      filter.facility = new RegExp(req.user.pharmacy.storeName, 'i');
    }

    const total = await Medicine.countDocuments(filter);
    const meds  = await Medicine.find(filter)
      .sort({ expiry: 1 })
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .populate('addedBy', 'email role');

    res.json({ success: true, count: meds.length, total, data: meds });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ══ GET /api/medicines/:id ════════════════════════════════════
router.get('/:id', protect, async (req, res) => {
  try {
    const med = await Medicine.findById(req.params.id).populate('addedBy', 'email role');
    if (!med) return res.status(404).json({ success: false, message: 'Medicine not found' });
    res.json({ success: true, data: med });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ══ POST /api/medicines ═══════════════════════════════════════
// Admin + pharmacy can add
router.post('/', protect, authorise('admin', 'pharmacy'), async (req, res) => {
  try {
    const med = await Medicine.create({ ...req.body, addedBy: req.user._id, addedVia: 'manual' });
    res.status(201).json({ success: true, message: 'Medicine added', data: med });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// ══ POST /api/medicines/bulk ══════════════════════════════════
// Bulk import from CSV parse result (array of medicine objects)
router.post('/bulk', protect, authorise('admin', 'pharmacy'), async (req, res) => {
  try {
    const { medicines } = req.body;
    if (!Array.isArray(medicines) || !medicines.length) {
      return res.status(400).json({ success: false, message: 'medicines array required' });
    }
    const docs = medicines.map(m => ({ ...m, addedBy: req.user._id, addedVia: 'csv' }));
    const result = await Medicine.insertMany(docs, { ordered: false });
    res.status(201).json({ success: true, message: `${result.length} medicines imported`, data: result });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// ══ POST /api/medicines/scan ══════════════════════════════════
// AI photo scan — receives base64 image, returns extracted fields
router.post('/scan', protect, authorise('admin', 'pharmacy'), async (req, res) => {
  try {
    const { imageBase64, mimeType = 'image/jpeg' } = req.body;
    if (!imageBase64) return res.status(400).json({ success: false, message: 'imageBase64 required' });

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 800,
        messages: [{
          role: 'user',
          content: [
            { type: 'image', source: { type: 'base64', media_type: mimeType, data: imageBase64 } },
            {
              type: 'text',
              text: `You are a medical label OCR system. Extract from this medicine label image.
Return ONLY valid JSON (no markdown):
{
  "name": "medicine name + strength",
  "manufacturer": "company name",
  "batch": "batch or lot number",
  "expiry": "YYYY-MM-DD (convert any format)",
  "quantity": "numeric quantity or 1",
  "mrp": "price if visible else empty",
  "storage": "Cold Chain (2–8°C)|Ultra-Cold (−20°C)|Room Temperature|Controlled (15–25°C)",
  "category": "Biologic|Vaccine|OTC|Antibiotic|Cardiac|Diabetes|Pain Relief",
  "confidence": "high|medium|low",
  "notes": "any handling warning (1 sentence max)"
}`
            }
          ]
        }]
      })
    });

    const data = await response.json();
    const raw  = data?.content?.[0]?.text || '{}';
    let parsed;
    try {
      parsed = JSON.parse(raw.replace(/```json|```/g, '').trim());
    } catch {
      parsed = { confidence: 'low', notes: 'AI could not parse label clearly. Please fill manually.' };
    }

    res.json({ success: true, data: parsed });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ══ PUT /api/medicines/:id ════════════════════════════════════
router.put('/:id', protect, authorise('admin', 'pharmacy'), async (req, res) => {
  try {
    const med = await Medicine.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!med) return res.status(404).json({ success: false, message: 'Medicine not found' });
    res.json({ success: true, message: 'Medicine updated', data: med });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// ══ DELETE /api/medicines/:id ═════════════════════════════════
router.delete('/:id', protect, authorise('admin', 'pharmacy'), async (req, res) => {
  try {
    const med = await Medicine.findByIdAndDelete(req.params.id);
    if (!med) return res.status(404).json({ success: false, message: 'Medicine not found' });
    res.json({ success: true, message: 'Medicine deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ══ PATCH /api/medicines/:id/iot ══════════════════════════════
// IoT sensor update — update temperature status
router.patch('/:id/iot', protect, authorise('admin'), async (req, res) => {
  try {
    const { tempC } = req.body;
    let tempStatus = 'ok';
    if (tempC > 8)  tempStatus = 'warn';
    if (tempC > 10) tempStatus = 'breach';

    const med = await Medicine.findByIdAndUpdate(
      req.params.id,
      { tempStatus, lastTempC: tempC, lastTempAt: new Date() },
      { new: true }
    );
    res.json({ success: true, data: med });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
