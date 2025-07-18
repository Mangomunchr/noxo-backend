const express = require('express');
const router = express.Router();
const { getLegacyNodes } = require('../logic/legacyNodeEngine');

router.get('/legacy-nodes', (req, res) => {
  res.json(getLegacyNodes());
});

module.exports = router;