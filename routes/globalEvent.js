const express = require('express');
const router = express.Router();
const { getCurrentEvent } = require('../logic/globalEventEngine');

router.get('/global-event', (req, res) => {
  res.json(getCurrentEvent());
});

module.exports = router;