const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  name:        { type: String, required: true, trim: true },
  category:    { type: String, enum: ['Biologic','Vaccine','OTC','Antibiotic','Cardiac','Diabetes','Pain Relief','Other'], default: 'OTC' },
  units:       { type: Number, required: true, min: 0 },
  expiry:      { type: Date,   required: true },
  storage:     { type: String, default: 'Room Temperature' },
  facility:    { type: String, required: true },
  batch:       { type: String, default: '' },
  manufacturer:{ type: String, default: '' },
  mrp:         { type: String, default: '' },
  notes:       { type: String, default: '' },

  // Temperature status from IoT
  tempStatus:  { type: String, enum: ['ok','warn','breach'], default: 'ok' },
  lastTempC:   { type: Number, default: null },
  lastTempAt:  { type: Date,   default: null },

  // Risk classification (computed)
  riskLevel:   { type: String, enum: ['safe','expiring','critical'], default: 'safe' },

  // Who added this medicine
  addedBy:     { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  addedVia:    { type: String, enum: ['manual','csv','scan','api'], default: 'manual' },

  // Redistribution tracking
  isRedistributed: { type: Boolean, default: false },
  redistributedTo: String,
  redistributedAt: Date,

}, { timestamps: true });

// Auto-compute riskLevel before save
medicineSchema.pre('save', function (next) {
  const days = Math.ceil((this.expiry - new Date()) / 86400000);
  if (this.tempStatus === 'breach' || days <= 7)  this.riskLevel = 'critical';
  else if (days <= 30)                             this.riskLevel = 'expiring';
  else                                             this.riskLevel = 'safe';
  next();
});

// Virtual: daysToExpiry
medicineSchema.virtual('daysToExpiry').get(function () {
  return Math.ceil((this.expiry - new Date()) / 86400000);
});

medicineSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Medicine', medicineSchema);
