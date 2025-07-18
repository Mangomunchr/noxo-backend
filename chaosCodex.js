const express = require('express');
const router = express.Router();
const { getChaosCodex } = require('../logic/chaosCodexEngine');

router.get('/chaos-codex', (req, res) => {
  res.json(getChaosCodex());
});

module.exports = router;