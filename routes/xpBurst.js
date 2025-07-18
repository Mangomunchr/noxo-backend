const express = require('express');
const router = express.Router();
const { getXPBurst } = require('../logic/xpBurstEngine');

router.get('/xp-burst', (req, res) => {
  res.json(getXPBurst());
});

module.exports = router;