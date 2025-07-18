const express = require('express');
const router = express.Router();
const { getChaosButtonHistory } = require('../logic/chaosButtonEngine');

router.get('/chaos-button-history', (req, res) => {
  res.json(getChaosButtonHistory());
});

module.exports = router;