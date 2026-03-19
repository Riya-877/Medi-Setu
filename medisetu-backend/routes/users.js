// ════════════════════════════════════════════════════════════
// routes/users.js — User management (Admin only)
// ════════════════════════════════════════════════════════════
const express = require('express');
const User    = require('../models/User');
const { protect, authorise } = require('../middleware/auth');
const router  = express.Router();

// GET /api/users
router.get('/', protect, authorise('admin'), async (req, res) => {
  try {
    const { role, flagged, page = 1, limit = 20 } = req.query;
    const filter = {};
    if (role)    filter.role    = role;
    if (flagged) filter.isFlagged = flagged === 'true';

    const users = await User.find(filter)
      .select('-password -loginAttempts')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json({ success: true, count: users.length, data: users.map(u => u.toSafeObject()) });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH /api/users/:id/suspend
router.patch('/:id/suspend', protect, authorise('admin'), async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { isSuspended: true }, { new: true });
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    res.json({ success: true, message: 'User suspended', data: user.toSafeObject() });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH /api/users/:id/unsuspend
router.patch('/:id/unsuspend', protect, authorise('admin'), async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { isSuspended: false, loginAttempts: 0 }, { new: true });
    res.json({ success: true, message: 'User unsuspended', data: user.toSafeObject() });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH /api/users/:id/verify
router.patch('/:id/verify', protect, authorise('admin'), async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { isVerified: true }, { new: true });
    res.json({ success: true, message: 'User verified', data: user.toSafeObject() });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
