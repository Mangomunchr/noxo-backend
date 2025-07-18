const express = require('express');
const router = express.Router();
const { getWeeklyBonuses } = require('../logic/weeklyBonusEngine');

router.get('/weekly-bonuses', (req, res) => {
  res.json(getWeeklyBonuses());
});

module.exports = router;