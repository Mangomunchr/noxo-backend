const express = require('express');
const router = express.Router();
const { getMangoVaultStatus } = require('../logic/mangoVaultEngine');

router.get('/vault/mango', (req, res) => {
  res.json(getMangoVaultStatus());
});

module.exports = router;