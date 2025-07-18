const express = require('express');
const router = express.Router();
const { getVaultSentiment } = require('../logic/vaultSentimentEngine');

router.get('/vault-sentiment', (req, res) => {
  res.json(getVaultSentiment());
});

module.exports = router;