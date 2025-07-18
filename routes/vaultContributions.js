const express = require('express');
const router = express.Router();
const { getVaultContributions } = require('../logic/contributionEngine');

router.get('/vault-contributions/:userId', (req, res) => {
  res.json(getVaultContributions(req.params.userId));
});

module.exports = router;