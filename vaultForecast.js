const express = require('express');
const router = express.Router();
const { getVaultForecast } = require('../logic/forecastEngine');

router.get('/vault-forecast', (req, res) => {
  res.json(getVaultForecast());
});

module.exports = router;