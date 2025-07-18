const express = require('express');
const router = express.Router();
const { generateForecastData } = require('../logic/forecastEngine');

router.get('/forecast', (req, res) => {
  const forecast = generateForecastData();
  res.json({ forecast });
});

module.exports = router;