const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

router.post('/override', auth, (req, res) => {
  const action = req.body.action;
  console.log("[FOUNDER OVERRIDE]", action);
  res.json({ ok: true, received: action });
});

module.exports = router;