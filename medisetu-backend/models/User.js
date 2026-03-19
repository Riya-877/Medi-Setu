const mongoose = require('mongoose');
const bcrypt   = require('bcryptjs');

const userSchema = new mongoose.Schema({
  // ── COMMON ──────────────────────────────────────────────
  email:    { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, minlength: 8 },
  role:     { type: String, enum: ['admin', 'pharmacy', 'user'], required: true },

  // ── LOCATION (all roles) ────────────────────────────────
  location: {
    city:    String,
    state:   String,
    pin:     String,
    street:  String,
    coords:  { lat: Number, lng: Number },
  },

  // ── ADMIN fields ────────────────────────────────────────
  admin: {
    name:           String,
    designation:    String,
    facilityName:   String,
    gstin:          String,
    officialPhone:  String,
    address:        String,
    coldUnits:      Number,
    idProof:        String,  // file path or base64 ref
  },

  // ── PHARMACY fields ─────────────────────────────────────
  pharmacy: {
    pharmacistName: String,
    licenseNo:      String,
    drugLicenseNo:  String,
    storeName:      String,
    gstin:          String,
    phone:          String,
    address:        String,
    coldStorage:    { type: Boolean, default: false },
  },

  // ── USER / PATIENT fields ───────────────────────────────
  patient: {
    fullName:       String,
    age:            Number,
    aadhaarLast4:   String,
    abhaId:         String,
    condition:      String,
    prescribedBy:   String,
    emergencyName:  String,
    emergencyPhone: String,
  },

  // ── STATUS ──────────────────────────────────────────────
  isVerified:    { type: Boolean, default: false },
  isSuspended:   { type: Boolean, default: false },
  isFlagged:     { type: Boolean, default: false },
  flagReason:    String,
  lastLogin:     Date,
  loginAttempts: { type: Number, default: 0 },

}, { timestamps: true });

// Hash password before save
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Compare passwords
userSchema.methods.comparePassword = async function (candidate) {
  return bcrypt.compare(candidate, this.password);
};

// Mask sensitive fields from JSON output
userSchema.methods.toSafeObject = function () {
  const obj = this.toObject();
  delete obj.password;
  delete obj.loginAttempts;
  if (obj.patient) {
    // Only expose last 4 digits of Aadhaar
    if (obj.patient.aadhaarLast4) {
      obj.patient.aadhaar = 'XXXX XXXX ' + obj.patient.aadhaarLast4;
      delete obj.patient.aadhaarLast4;
    }
  }
  return obj;
};

module.exports = mongoose.model('User', userSchema);
