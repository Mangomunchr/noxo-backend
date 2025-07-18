const express = require('express');
const router = express.Router();
const { getVaultWeather } = require('../logic/weatherEngine');

router.get('/weather', (req, res) => {
  res.json({ condition: getVaultWeather() });
});

module.exports = router;