const express = require('express');
const router = express.Router();
const { triggerRitual } = require('../logic/ritualEngine');

router.post('/rituals/trigger', (req, res) => {
  const { type } = req.body;
  const result = triggerRitual(type);
  res.json(result);
});

module.exports = router;