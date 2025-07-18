
const express = require('express');
const router = express.Router();
const { getVaultRiskData } = require('../logic/vaultRiskEngine');

router.get('/vaultRisk', (req, res) => {
  res.json(getVaultRiskData());
});

module.exports = router;
