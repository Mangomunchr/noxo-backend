// backend/src/routes/timeattack.js
const express = require('express');
const router = express.Router();

// In-memory stub data
let startTime = Date.now();
let userLaps = {}; // { sessionId: laps }
const LEADERBOARD_USERS = ['NodeMonk_1', 'Rendar_42', 'Chaosborn_X'];

// GET /api/ritual/timeattack/status
router.get('/status', (req, res) => {
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  const totalDuration = 90; // seconds
  const remainingSeconds = Math.max(0, totalDuration - elapsed);
  const lapsCompleted = userLaps[req.ip] || 0;

  // Generate a dummy leaderboard
  const leaderboard = LEADERBOARD_USERS.map((u, i) => ({
    user: u,
    laps: Math.max(0, lapsCompleted - (i * 2)),
  }));

  res.json({
    active: remainingSeconds > 0,
    remainingSeconds,
    lapsCompleted,
    leaderboard,
  });
});

// POST /api/ritual/timeattack/lap
router.post('/lap', (req, res) => {
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  if (elapsed > 90) {
    return res.status(400).json({ error: 'Time Attack has ended' });
  }

  // Track laps by IP for stub purposes
  userLaps[req.ip] = (userLaps[req.ip] || 0) + 1;
  res.json({ lapsCompleted: userLaps[req.ip] });
});

module.exports = router;
