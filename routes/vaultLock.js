const express = require('express');
const router = express.Router();
const { getVaultLockStatus } = require('../logic/vaultLockEngine');

router.get('/vault-lock', (req, res) => {
  res.json(getVaultLockStatus());
});

module.exports = router;