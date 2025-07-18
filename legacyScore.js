const express = require('express');
const router = express.Router();

router.get('/legacy-score/:nodeId', (req, res) => {
  const { nodeId } = req.params;
  const fakeScore = 1000 + Math.floor(Math.random() * 1000);
  res.json({ nodeId, legacyScore: fakeScore });
});

module.exports = router;
