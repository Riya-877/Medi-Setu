const nodemailer = require('nodemailer');
const Medicine   = require('../models/Medicine');
const { Alert }  = require('../models/Request');

// ── Email transporter ─────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (to, subject, html) => {
  try {
    await transporter.sendMail({ from: `MediSetu <${process.env.EMAIL_USER}>`, to, subject, html });
    console.log(`📧 Email sent to ${to}: ${subject}`);
  } catch (err) {
    console.error(`❌ Email failed to ${to}:`, err.message);
  }
};

// ── Expiry alert runner ────────────────────────────────────────
const runExpiryAlerts = async () => {
  console.log('⏰ Running expiry alert cron job...');
  const now   = new Date();

  // Thresholds in days
  const thresholds = [
    { days: 7,  type: 'expiry_7d',  severity: 'critical', label: '7 days' },
    { days: 30, type: 'expiry_30d', severity: 'warning',  label: '30 days' },
    { days: 60, type: 'expiry_60d', severity: 'info',     label: '60 days' },
  ];

  for (const threshold of thresholds) {
    const targetDate = new Date(now.getTime() + threshold.days * 86400000);
    const dayStart   = new Date(targetDate); dayStart.setHours(0, 0, 0, 0);
    const dayEnd     = new Date(targetDate); dayEnd.setHours(23, 59, 59, 999);

    const expiring = await Medicine.find({
      expiry: { $gte: dayStart, $lte: dayEnd },
      isRedistributed: false,
    });

    for (const med of expiring) {
      // Avoid duplicate alerts for same medicine + same threshold
      const exists = await Alert.findOne({
        type: threshold.type,
        medicine: med._id,
        createdAt: { $gte: new Date(now - 23 * 3600000) }, // within last 23 hours
      });
      if (exists) continue;

      // Create alert in DB
      await Alert.create({
        type:     threshold.type,
        severity: threshold.severity,
        title:    `${med.name} — Expiring in ${threshold.label}`,
        message:  `${med.units} units at ${med.facility} expire on ${med.expiry.toDateString()}. Redistribution recommended.`,
        medicine: med._id,
      });

      // Send email
      if (process.env.EMAIL_USER) {
        await sendEmail(
          process.env.EMAIL_USER,
          `⚠️ MediSetu Alert: ${med.name} expires in ${threshold.label}`,
          `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
              <h2 style="color:#0d9488">MediSetu Expiry Alert</h2>
              <p><strong>Medicine:</strong> ${med.name}</p>
              <p><strong>Units:</strong> ${med.units}</p>
              <p><strong>Facility:</strong> ${med.facility}</p>
              <p><strong>Expiry:</strong> ${med.expiry.toDateString()}</p>
              <p><strong>Days remaining:</strong> ${threshold.label}</p>
              <p style="background:#fef2f2;padding:12px;border-radius:8px;border-left:4px solid #ef4444">
                ⚠️ Please arrange redistribution to avoid wastage.
              </p>
              <a href="${process.env.FRONTEND_URL}/inventory.html" 
                 style="display:inline-block;background:#0d9488;color:white;padding:10px 22px;border-radius:8px;text-decoration:none;margin-top:12px">
                View Inventory
              </a>
            </div>
          `
        );
      }
    }
  }

  // Temperature breach alerts
  const breached = await Medicine.find({ tempStatus: 'breach', isRedistributed: false });
  for (const med of breached) {
    const exists = await Alert.findOne({
      type: 'temp_breach',
      medicine: med._id,
      createdAt: { $gte: new Date(now - 3600000) },
    });
    if (exists) continue;
    await Alert.create({
      type:     'temp_breach',
      severity: 'critical',
      title:    `Temperature Breach — ${med.name}`,
      message:  `${med.name} at ${med.facility} has exceeded safe temperature range (${med.lastTempC}°C). Immediate action required.`,
      medicine: med._id,
    });
  }

  console.log('✅ Expiry alert cron complete');
};

module.exports = { runExpiryAlerts, sendEmail };
