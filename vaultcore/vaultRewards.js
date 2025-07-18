const express = require('express');
const router = express.Router();
const { getUserVaultRewards, claimUserVaultRewards } = require('../logic/vaultRewardEngine');

router.get('/vault-rewards/:userId', (req, res) => {
  res.json(getUserVaultRewards(req.params.userId));
});

router.post('/vault-rewards/:userId/claim', (req, res) => {
  claimUserVaultRewards(req.params.userId);
  res.json({ claimed: true });
});

module.exports = router;