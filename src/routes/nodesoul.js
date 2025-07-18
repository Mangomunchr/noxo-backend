// backend/src/routes/nodesoul.js
const express = require('express');
const router = express.Router();

// Mock NodeSoul data per request
router.get('/status', (req, res) => {
  // In a real app, look up user by auth token or session
  res.json({
    userId: req.ip,             // stub: use IP as identifier
    nsr: 1523,                  // NodeSoul Rating
    rd: 42,                     // Rating Deviation
    volatility: 0.07,           // Glicko2 volatility
    tier: 'NodeMonk',           // current rank
    sigils: ['Vaultstrike', 'MangoWar', 'ChaosWhisper'] // earned sigils
  });
});

module.exports = router;
