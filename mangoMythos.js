const express = require('express');
const router = express.Router();
const { getMangoMythos } = require('../logic/mangoMythosEngine');

router.get('/mango-mythos', (req, res) => {
  res.json(getMangoMythos());
});

module.exports = router;