// backend/src/routes/xp.js
const express = require('express');
const router = express.Router();

// Mock leaderboard data
const leaderboard = Array.from({ length: 10 }, (_, i) => ({
  rank: i + 1,
  userId: `NodeMonk_${100 - i}`,
  xp: 2000 - i * 150,
  nsr: 1800 - i * 50,
}));

// GET /api/xp/leaderboard
router.get('/leaderboard', (req, res) => {
  res.json(leaderboard);
});

module.exports = router;
