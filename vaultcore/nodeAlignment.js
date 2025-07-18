const express = require('express');
const router = express.Router();
const { getNodeAlignment } = require('../logic/nodeAlignmentEngine');

router.get('/node-alignment/:userId', (req, res) => {
  res.json(getNodeAlignment(req.params.userId));
});

module.exports = router;