
const express = require('express');
const router = express.Router();
const { getEchoesData } = require('../logic/echoesEngine');

router.get('/echoes', (req, res) => {
  res.json(getEchoesData());
});

module.exports = router;
