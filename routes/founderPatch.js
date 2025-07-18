const express = require('express');
const router = express.Router();
const { processFounderCommand } = require('../logic/founderPatchEngine');

router.post('/founder-patch', (req, res) => {
  const result = processFounderCommand(req.body.command);
  res.json({ message: result });
});

module.exports = router;