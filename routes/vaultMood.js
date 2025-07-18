const express = require('express');
const router = express.Router();
const { getVaultMood } = require('../logic/vaultMoodEngine');

router.get('/vault-mood', (req, res) => {
  res.json(getVaultMood());
});

module.exports = router;