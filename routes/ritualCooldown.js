const express = require('express');
const router = express.Router();
const { getCooldownForRitual } = require('../logic/ritualCooldownEngine');

router.get('/ritual-cooldown/:name', (req, res) => {
  res.json(getCooldownForRitual(req.params.name));
});

module.exports = router;