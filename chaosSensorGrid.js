const express = require('express');
const router = express.Router();
const { getChaosSensorGrid } = require('../logic/chaosSensorEngine');

router.get('/chaos-sensor-grid', (req, res) => {
  res.json(getChaosSensorGrid());
});

module.exports = router;