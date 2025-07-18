const express = require('express');
const router = express.Router();
const { getMythicScrolls } = require('../logic/mythicScrollEngine');

router.get('/mythic-scrolls/:userId', (req, res) => {
  res.json(getMythicScrolls(req.params.userId));
});

module.exports = router;