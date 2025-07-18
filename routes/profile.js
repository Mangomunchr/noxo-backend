const express = require('express');
const router = express.Router();
const { getUserProfile } = require('../logic/profileEngine');

router.get('/profile/:userId', (req, res) => {
  const profile = getUserProfile(req.params.userId);
  res.json(profile);
});

module.exports = router;