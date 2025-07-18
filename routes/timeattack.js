const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

let lapsCompleted = 0;
let leaderboard = [{ user: "test-user", laps: 12 }];

router.get('/status', auth, (req, res) => {
  res.json({
    active: true,
    remainingSeconds: 180,
    lapsCompleted,
    leaderboard
  });
});

router.post('/lap', auth, (req, res) => {
  lapsCompleted += 1;
  const index = leaderboard.findIndex(e => e.user === req.user.id);
  if (index >= 0) {
    leaderboard[index].laps += 1;
  } else {
    leaderboard.push({ user: req.user.id, laps: 1 });
  }
  res.json({ lapsCompleted });
});

module.exports = router;