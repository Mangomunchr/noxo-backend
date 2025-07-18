const express = require('express');
const router = express.Router();
const { getStrikeLogForUser } = require('../logic/strikeLogEngine');

router.get('/strike-log/:userId', (req, res) => {
  res.json(getStrikeLogForUser(req.params.userId));
});

module.exports = router;