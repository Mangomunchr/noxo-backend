
const express = require('express');
const router = express.Router();
const { getTrailData } = require('../logic/trailEngine');

router.get('/trail', (req, res) => {
  res.json(getTrailData());
});

module.exports = router;
