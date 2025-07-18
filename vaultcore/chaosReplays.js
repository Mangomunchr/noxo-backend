const express = require('express');
const router = express.Router();
const { getChaosReplays } = require('../logic/chaosReplayEngine');

router.get('/chaos-replays', (req, res) => {
  res.json(getChaosReplays());
});

module.exports = router;