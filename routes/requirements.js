
const express = require('express');
const router = express.Router();
const { getRequirementsData } = require('../logic/requirementsEngine');

router.get('/requirements', (req, res) => {
  res.json(getRequirementsData());
});

module.exports = router;
