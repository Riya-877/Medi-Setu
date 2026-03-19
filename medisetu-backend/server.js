require('dotenv').config();
const express    = require('express');
const cors       = require('cors');
const mongoose   = require('mongoose');
const cron       = require('node-cron');

const authRoutes     = require('./routes/auth');
const medicineRoutes = require('./routes/medicines');
const requestRoutes  = require('./routes/requests');
const userRoutes     = require('./routes/users');
const alertRoutes    = require('./routes/alerts');
const { runExpiryAlerts } = require('./config/cronJobs');

const app  = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: ['http://localhost:3000','http://127.0.0.1:5500','http://localhost:5500'],
  credentials: true,
}));
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

app.use('/api/auth',      authRoutes);
app.use('/api/medicines', medicineRoutes);
app.use('/api/requests',  requestRoutes);
app.use('/api/users',     userRoutes);
app.use('/api/alerts',    alertRoutes);

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'MediSetu API',
    time: new Date().toISOString(),
    db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
  });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.method} ${req.url} not found` });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ success: false, message: err.message || 'Internal server error' });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 MediSetu API running at http://localhost:${PORT}`));
    cron.schedule('0 8 * * *', runExpiryAlerts);
  })
  .catch(err => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  });
