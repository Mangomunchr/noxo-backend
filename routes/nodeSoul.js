const express = require('express');
const router = express.Router();
const { getNodeSoulMemory } = require('../logic/nodeSoulEngine');

router.get('/nodesoul/:userId', (req, res) => {
  res.json(getNodeSoulMemory(req.params.userId));
});

module.exports = router;