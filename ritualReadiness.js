const express = require('express');
const router = express.Router();
const { getRitualReadiness } = require('../logic/ritualReadinessEngine');

router.get('/ritual-readiness/:userId', (req, res) => {
  res.json(getRitualReadiness(req.params.userId));
});

module.exports = router;