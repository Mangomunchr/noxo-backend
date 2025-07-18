const express = require('express');
const router = express.Router();
const { getActiveAlerts } = require('../logic/alertEngine');

router.get('/alerts', (req, res) => {
  res.json(getActiveAlerts());
});

module.exports = router;