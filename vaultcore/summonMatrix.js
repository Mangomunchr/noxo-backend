const express = require('express');
const router = express.Router();
const { getSummonMatrix } = require('../logic/summonMatrixEngine');

router.get('/summon-matrix', (req, res) => {
  res.json(getSummonMatrix());
});

module.exports = router;