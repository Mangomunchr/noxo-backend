const express = require('express');
const router = express.Router();
const { getMangoWeather } = require('../logic/mangoWeatherEngine');

router.get('/mango-weather', (req, res) => {
  res.json(getMangoWeather());
});

module.exports = router;