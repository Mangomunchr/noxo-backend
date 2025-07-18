
const express = require('express');
const router = express.Router();
const { getComboData } = require('../logic/comboEngine');

router.get('/combo', (req, res) => {
  res.json(getComboData());
});

module.exports = router;
