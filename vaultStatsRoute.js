const express = require('express');
const router = express.Router();

// Dummy vault stats logic
router.get('/vault-stats', (req, res) => {
  res.json({
    xp: 9999,
    multiplier: 3,
    streak: 4,
    syncedNodes: 16
  });
});

module.exports = router;
