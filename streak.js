const express = require('express');
const router = express.Router();
const { getUserStreak } = require('../logic/streakEngine');

router.get('/streak/:userId', (req, res) => {
  const streak = getUserStreak(req.params.userId);
  res.json({ streak });
});

module.exports = router;