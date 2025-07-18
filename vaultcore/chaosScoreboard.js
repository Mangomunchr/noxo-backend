const express = require('express');
const router = express.Router();
const { getChaosScoreboard } = require('../logic/chaosScoreboardEngine');

router.get('/chaos-scoreboard', (req, res) => {
  res.json(getChaosScoreboard());
});

module.exports = router;