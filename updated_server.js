// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const referralRoutes = require('./api/referrals');
const jobController  = require('./controllers/jobController');

const app = express();
app.use(bodyParser.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
app.locals.pool = pool;

// Auth middleware: require X-User-Id header
app.use((req, res, next) => {
  req.user = { id: req.headers['x-user-id'] || null };
  if (!req.user.id) {
    return res.status(401).json({ error: 'Missing X-User-Id header' });
  }
  next();
});

// Route mounting
app.use('/api/referrals', referralRoutes);
app.use('/jobs', jobController);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`NOXO backend live on port ${PORT}`));
