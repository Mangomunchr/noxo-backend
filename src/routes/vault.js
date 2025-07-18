// src/routes/vault.js
const express = require('express');
const router = express.Router();

let vaultBalance = 10000;

router.get('/status', (req, res) => {
  const xpHistory = Array.from({ length: 7 }, (_, i) => ({
    date: new Date(Date.now() - (6 - i) * 86400000).toISOString().slice(0,10),
    xp: Math.floor(50 + Math.random() * 150)
  }));
  res.json({
    xpPerJob: 10,
    vaultBalance,
    userSharePercent: 5.0,
    monthlyProjection: vaultBalance * 0.05,
    xpHistory
  });
});

router.post('/claim', (req, res) => {
  const payout = vaultBalance * 0.01;
  vaultBalance -= payout;
  res.json({ success: true, newBalance: vaultBalance });
});

module.exports = router;