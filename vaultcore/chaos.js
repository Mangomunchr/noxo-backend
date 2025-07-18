const express = require('express');
const router = express.Router();
const { getChaosState, triggerChaosEvent } = require('../logic/chaosEngine');

router.get('/chaos/state', (req, res) => {
  res.json(getChaosState());
});

router.post('/chaos/trigger', (req, res) => {
  const result = triggerChaosEvent(req.body.userId);
  res.json(result);
});

module.exports = router;