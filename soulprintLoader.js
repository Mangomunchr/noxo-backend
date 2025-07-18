const express = require('express');
const router = express.Router();

router.post('/soulprint', (req, res) => {
  const { nodeId } = req.body;
  console.log(`[Soulprint] Node ${nodeId} initialized and soulbound.`);
  res.json({ message: 'Soulprint registered.' });
});

module.exports = router;
