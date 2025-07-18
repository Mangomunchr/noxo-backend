const express = require('express');
const router = express.Router();
const { getRankPerks } = require('../logic/rankPerkEngine');

router.get('/rank-perks', (req, res) => {
  res.json(getRankPerks());
});

module.exports = router;