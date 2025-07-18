const express = require('express');
const router = express.Router();
const { getInviteCodeData } = require('../logic/inviteCodeEngine');

router.get('/invite-code/:userId', (req, res) => {
  res.json(getInviteCodeData(req.params.userId));
});

module.exports = router;