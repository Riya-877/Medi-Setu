// ════════════════════════════════════════════════════════════
// routes/requests.js — Medicine redistribution requests
// ════════════════════════════════════════════════════════════
const express  = require('express');
const { MedicineRequest, Alert } = require('../models/Request');
const { protect, authorise }     = require('../middleware/auth');

const router = express.Router();

// GET /api/requests — Admin sees all, User sees own
router.get('/', protect, async (req, res) => {
  try {
    const filter = req.user.role === 'user' ? { requestedBy: req.user._id } : {};
    const { status, page = 1, limit = 20 } = req.query;
    if (status) filter.status = status;

    const reqs = await MedicineRequest.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .populate('requestedBy', 'email role patient.fullName')
      .populate('reviewedBy', 'email');

    res.json({ success: true, count: reqs.length, data: reqs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST /api/requests — User submits request
router.post('/', protect, async (req, res) => {
  try {
    const reqData = {
      ...req.body,
      requestedBy: req.user._id,
      requestLocation: req.user.location,
    };

    // Anti-abuse: flag if user location doesn't match request location
    if (req.body.requestPin && req.user.location?.pin) {
      if (req.body.requestPin !== req.user.location.pin) {
        reqData.locationMismatch = true;
        reqData.flagged = true;
        reqData.flagReason = 'Location mismatch: request PIN differs from registered address';
        // Create alert for admin
        await Alert.create({
          type: 'suspicious_order',
          severity: 'warning',
          title: 'Suspicious Order Flagged',
          message: `User ${req.user.email} placed an order with mismatched location. Review required.`,
          request: null,
        });
      }
    }

    const newReq = await MedicineRequest.create(reqData);
    res.status(201).json({ success: true, message: 'Request submitted', data: newReq });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// PATCH /api/requests/:id/status — Admin approves/rejects
router.patch('/:id/status', protect, authorise('admin', 'pharmacy'), async (req, res) => {
  try {
    const { status, rejectReason } = req.body;
    const update = { status, reviewedBy: req.user._id, reviewedAt: new Date() };
    if (status === 'rejected' && rejectReason) update.rejectReason = rejectReason;

    const req_ = await MedicineRequest.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!req_) return res.status(404).json({ success: false, message: 'Request not found' });

    res.json({ success: true, message: `Request ${status}`, data: req_ });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE /api/requests/:id — User can cancel pending requests
router.delete('/:id', protect, async (req, res) => {
  try {
    const req_ = await MedicineRequest.findOne({ _id: req.params.id, requestedBy: req.user._id, status: 'pending' });
    if (!req_) return res.status(404).json({ success: false, message: 'Request not found or already processed' });
    await req_.deleteOne();
    res.json({ success: true, message: 'Request cancelled' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
