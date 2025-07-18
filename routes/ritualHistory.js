const express = require('express');
const router = express.Router();
const { getRitualHistory } = require('../logic/ritualLogEngine');

router.get('/ritual-history', (req, res) => {
  res.json(getRitualHistory());
});

module.exports = router;