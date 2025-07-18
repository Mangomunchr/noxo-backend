const express = require('express');
const router = express.Router();
const { getChaosMutations } = require('../logic/chaosMutationEngine');

router.get('/chaos-mutations', (req, res) => {
  res.json(getChaosMutations());
});

module.exports = router;