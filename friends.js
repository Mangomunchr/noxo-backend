const express = require('express');
const router = express.Router();
const { getFriendsList } = require('../logic/friendsEngine');

router.get('/friends/:userId', (req, res) => {
  res.json(getFriendsList(req.params.userId));
});

module.exports = router;