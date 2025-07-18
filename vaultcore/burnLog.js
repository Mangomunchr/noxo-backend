const express = require('express');
const router = express.Router();
const { getBurnLog } = require('../logic/burnLogEngine');

router.get('/burn-log', (req, res) => {
  res.json(getBurnLog());
});

module.exports = router;