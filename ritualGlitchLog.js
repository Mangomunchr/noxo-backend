const express = require('express');
const router = express.Router();
const { getRitualGlitchLog } = require('../logic/ritualGlitchEngine');

router.get('/ritual-glitch-log', (req, res) => {
  res.json(getRitualGlitchLog());
});

module.exports = router;