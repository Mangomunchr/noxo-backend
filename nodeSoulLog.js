const express = require('express');
const router = express.Router();

router.post('/nodesoul-log', (req, res) => {
  const { userId, ritual, value } = req.body;
  console.log(`[NodeSoul] ${userId} performed ${ritual} → +${value} XP`);
  res.status(200).json({ message: 'NodeSoul log recorded' });
});

module.exports = router;
