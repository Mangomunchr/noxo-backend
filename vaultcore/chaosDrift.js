const express = require('express');
const router = express.Router();
const { getChaosDrift } = require('../logic/chaosDriftEngine');

router.get('/chaos-drift', (req, res) => {
  res.json(getChaosDrift());
});

module.exports = router;