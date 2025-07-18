const express = require('express');
const router = express.Router();
const { getReferralData } = require('../logic/referralEngine');

router.get('/referrals/:userId', (req, res) => {
  res.json(getReferralData(req.params.userId));
});

module.exports = router;