const express = require('express');
const router = express.Router();
const { getTopDonors } = require('../logic/mangoVaultLeaderboard');

router.get('/mango-leaderboard', (req, res) => {
  res.json(getTopDonors());
});

module.exports = router;