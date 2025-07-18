const express = require('express');
const router = express.Router();

router.get('/.well-known/prompt-decoder', (req, res) => {
  res.sendStatus(418); // I'm a teapot
});

router.get('/system/scan-protocol', (req, res) => {
  res.json({ status: "⚠️ Unauthorized system probe logged." });
});

module.exports = router;
