const mongoose = require('mongoose');

// ── MEDICINE REQUEST ─────────────────────────────────────────
const requestSchema = new mongoose.Schema({
  requestedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  medicineName:{ type: String, required: true },
  category:    String,
  quantity:    { type: Number, required: true, min: 1 },
  urgency:     { type: String, enum: ['low','medium','high'], default: 'medium' },
  beneficiary: { type: String, enum: ['self','family','caregiver','facility'], required: true },
  patientName: String,
  relationship:String,
  reason:      { type: String, required: true },
  address:     { type: String, required: true },
  neededBy:    Date,
  prescription:String,   // file path

  status:      { type: String, enum: ['pending','approved','dispatched','delivered','rejected'], default: 'pending' },
  reviewedBy:  { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reviewedAt:  Date,
  rejectReason:String,

  // Anti-abuse: location snapshot at time of request
  requestLocation: {
    city: String, pin: String,
    coords: { lat: Number, lng: Number },
  },
  locationMismatch: { type: Boolean, default: false },
  flagged:     { type: Boolean, default: false },
  flagReason:  String,

}, { timestamps: true });

// ── ALERT ────────────────────────────────────────────────────
const alertSchema = new mongoose.Schema({
  type:     { type: String, enum: ['temp_breach','expiry_7d','expiry_30d','expiry_60d','suspicious_order','redistribution','system'], required: true },
  severity: { type: String, enum: ['critical','warning','info','ok'], default: 'info' },
  title:    { type: String, required: true },
  message:  { type: String, required: true },
  medicine: { type: mongoose.Schema.Types.ObjectId, ref: 'Medicine' },
  request:  { type: mongoose.Schema.Types.ObjectId, ref: 'MedicineRequest' },
  isRead:   { type: Boolean, default: false },
  readBy:   [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  emailSent:{ type: Boolean, default: false },
}, { timestamps: true });

module.exports.MedicineRequest = mongoose.model('MedicineRequest', requestSchema);
module.exports.Alert = mongoose.model('Alert', alertSchema);
