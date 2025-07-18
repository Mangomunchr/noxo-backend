const express = require('express');
const router = express.Router();
const { getChaosBeaconStatus } = require('../logic/chaosBeaconEngine');

router.get('/chaos-beacon', (req, res) => {
  res.json(getChaosBeaconStatus());
});

module.exports = router;