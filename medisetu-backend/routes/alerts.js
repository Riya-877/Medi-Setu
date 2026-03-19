// routes/alerts.js
const express  = require('express');
const { Alert } = require('../models/Request');
const { protect, authorise } = require('../middleware/auth');
const router   = express.Router();

// GET /api/alerts
router.get('/', protect, authorise('admin', 'pharmacy'), async (req, res) => {
  try {
    const { isRead, severity, page = 1, limit = 20 } = req.query;
    const filter = {};
    if (isRead !== undefined) filter.isRead = isRead === 'true';
    if (severity) filter.severity = severity;

    const alerts = await Alert.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .populate('medicine', 'name expiry facility')
      .populate('request', 'medicineName requestedBy status');

    res.json({ success: true, count: alerts.length, data: alerts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH /api/alerts/:id/read
router.patch('/:id/read', protect, async (req, res) => {
  try {
    const alert = await Alert.findByIdAndUpdate(
      req.params.id,
      { isRead: true, $addToSet: { readBy: req.user._id } },
      { new: true }
    );
    res.json({ success: true, data: alert });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH /api/alerts/read-all
router.patch('/read-all', protect, authorise('admin'), async (req, res) => {
  try {
    await Alert.updateMany({ isRead: false }, { isRead: true });
    res.json({ success: true, message: 'All alerts marked as read' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
