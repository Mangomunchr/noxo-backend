const express = require('express');
const router = express.Router();
const { getMangoAuditLog } = require('../logic/mangoAuditEngine');

router.get('/mango-audit', (req, res) => {
  res.json(getMangoAuditLog());
});

module.exports = router;