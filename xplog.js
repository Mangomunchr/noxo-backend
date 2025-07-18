const express = require('express');
const router = express.Router();
const { getXPLog } = require('../logic/xpLogEngine');

router.get('/xplog/:userId', (req, res) => {
  res.json(getXPLog(req.params.userId));
});

module.exports = router;