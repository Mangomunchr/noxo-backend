const express = require('express');
const router = express.Router();
const { getPatchNotes } = require('../logic/patchNoteEngine');

router.get('/patch-notes', (req, res) => {
  res.json(getPatchNotes());
});

module.exports = router;