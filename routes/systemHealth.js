const express = require('express');
const router = express.Router();
const { getSystemStatus } = require('../logic/systemEngine');

router.get('/system-health', (req, res) => {
  res.json(getSystemStatus());
});

module.exports = router;