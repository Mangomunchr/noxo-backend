const express = require('express');
const router = express.Router();
const { getVaultBlessings } = require('../logic/vaultBlessingEngine');

router.get('/vault-blessings', (req, res) => {
  res.json(getVaultBlessings());
});

module.exports = router;