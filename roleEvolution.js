const express = require('express');
const router = express.Router();
const { getRoleEvolutionHistory } = require('../logic/roleEvolutionEngine');

router.get('/role-evolution/:userId', (req, res) => {
  res.json(getRoleEvolutionHistory(req.params.userId));
});

module.exports = router;