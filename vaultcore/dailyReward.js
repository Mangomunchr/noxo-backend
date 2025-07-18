const express = require('express');
const router = express.Router();
const { getDailyReward } = require('../logic/dailyRewardEngine');

router.get('/daily-reward/:userId', (req, res) => {
  const reward = getDailyReward(req.params.userId);
  res.json(reward);
});

module.exports = router;