const express = require('express');
const router = express.Router();
const { getMangoWarVaultContributions } = require('../logic/mangoWarVaultEngine');

router.get('/mango-war-vault', (req, res) => {
  res.json(getMangoWarVaultContributions());
});

module.exports = router;