const express = require('express');
const { body, validationResult } = require('express-validator');
const User    = require('../models/User');
const { signToken, protect } = require('../middleware/auth');

const router = express.Router();

// ── Helper ────────────────────────────────────────────────────
const sendError = (res, code, msg) => res.status(code).json({ success: false, message: msg });

// ══ POST /api/auth/register ═══════════════════════════════════
router.post('/register', [
  body('email').isEmail().withMessage('Valid email required'),
  body('password').isLength({ min: 8 }).withMessage('Password must be 8+ characters'),
  body('role').isIn(['admin','pharmacy','user']).withMessage('Invalid role'),
], async (req, res) => {
  // Validate
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ success: false, errors: errors.array() });

  try {
    const { email, password, role, location } = req.body;

    // Check duplicate
    if (await User.findOne({ email })) return sendError(res, 409, 'Email already registered');

    // Build user object
    const userData = { email, password, role, location: location || {} };

    // Role-specific fields
    if (role === 'admin') {
      const { name, designation, facilityName, gstin, officialPhone, address, coldUnits } = req.body.admin || {};
      if (!name || !facilityName || !gstin || !officialPhone) {
        return sendError(res, 400, 'Admin: name, facilityName, gstin, officialPhone are required');
      }
      userData.admin = { name, designation, facilityName, gstin, officialPhone, address, coldUnits: coldUnits || 0 };
    }

    if (role === 'pharmacy') {
      const { pharmacistName, licenseNo, drugLicenseNo, storeName, phone, gstin, address, coldStorage } = req.body.pharmacy || {};
      if (!pharmacistName || !licenseNo || !drugLicenseNo || !storeName || !phone) {
        return sendError(res, 400, 'Pharmacy: pharmacistName, licenseNo, drugLicenseNo, storeName, phone are required');
      }
      userData.pharmacy = { pharmacistName, licenseNo, drugLicenseNo, storeName, gstin, phone, address, coldStorage: coldStorage === true };
    }

    if (role === 'user') {
      const { fullName, age, aadhaarLast4, abhaId, condition, prescribedBy, emergencyName, emergencyPhone } = req.body.patient || {};
      if (!fullName || !emergencyName || !emergencyPhone) {
        return sendError(res, 400, 'User: fullName, emergencyName, emergencyPhone are required');
      }
      userData.patient = { fullName, age, aadhaarLast4, abhaId, condition, prescribedBy, emergencyName, emergencyPhone };
    }

    const user  = await User.create(userData);
    const token = signToken(user._id, user.role);

    res.status(201).json({
      success: true,
      message: 'Account created successfully',
      token,
      user: user.toSafeObject(),
    });

  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ success: false, message: 'Registration failed', error: err.message });
  }
});

// ══ POST /api/auth/login ══════════════════════════════════════
router.post('/login', [
  body('email').isEmail(),
  body('password').notEmpty(),
  body('role').isIn(['admin','pharmacy','user']),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ success: false, errors: errors.array() });

  try {
    const { email, password, role } = req.body;

    // Find user + include password for comparison
    const user = await User.findOne({ email, role }).select('+password');
    if (!user) return sendError(res, 401, 'Invalid email, password or role');
    if (user.isSuspended) return sendError(res, 403, 'Account suspended. Contact support.');

    const match = await user.comparePassword(password);
    if (!match) {
      // Track failed attempts
      await User.findByIdAndUpdate(user._id, { $inc: { loginAttempts: 1 } });
      return sendError(res, 401, 'Invalid email or password');
    }

    // Reset failed attempts + update last login
    await User.findByIdAndUpdate(user._id, { loginAttempts: 0, lastLogin: new Date() });

    const token = signToken(user._id, user.role);
    res.json({
      success: true,
      message: `Signed in as ${role}`,
      token,
      user: user.toSafeObject(),
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ success: false, message: 'Login failed' });
  }
});

// ══ GET /api/auth/me ══════════════════════════════════════════
router.get('/me', protect, async (req, res) => {
  res.json({ success: true, user: req.user.toSafeObject() });
});

// ══ POST /api/auth/forgot-password ════════════════════════════
router.post('/forgot-password', [body('email').isEmail()], async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    // Always return success to prevent email enumeration
    res.json({ success: true, message: 'If that email exists, a reset link has been sent.' });
    if (!user) return;
    // TODO: generate reset token + send email via Nodemailer
    console.log(`Password reset requested for ${req.body.email}`);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error processing request' });
  }
});

module.exports = router;
