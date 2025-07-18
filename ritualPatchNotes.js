const express = require('express');
const router = express.Router();
const { getRitualPatchNotes } = require('../logic/ritualPatchEngine');

router.get('/ritual-patch-notes', (req, res) => {
  res.json(getRitualPatchNotes());
});

module.exports = router;