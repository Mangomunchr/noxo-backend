const express = require('express');
const router = express.Router();
const { getUserSettings, saveUserSettings } = require('../logic/settingsEngine');

router.get('/settings/:userId', (req, res) => {
  res.json(getUserSettings(req.params.userId));
});

router.post('/settings/:userId', (req, res) => {
  saveUserSettings(req.params.userId, req.body);
  res.json({ success: true });
});

module.exports = router;