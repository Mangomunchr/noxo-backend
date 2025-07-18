const express = require('express');
const router = express.Router();
const { getAllRanks } = require('../logic/rankEngine');

router.get('/ranks', (req, res) => {
  res.json(getAllRanks());
});

module.exports = router;