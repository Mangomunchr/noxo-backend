const express = require('express');
const router = express.Router();
const { getChaosLog } = require('../logic/chaosLogEngine');

router.get('/chaos-log', (req, res) => {
  res.json(getChaosLog());
});

module.exports = router;