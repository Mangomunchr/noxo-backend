const express = require('express');
const router = express.Router();
const { getMangoRadar } = require('../logic/mangoRadarEngine');

router.get('/mango-radar', (req, res) => {
  res.json(getMangoRadar());
});

module.exports = router;