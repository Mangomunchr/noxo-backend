// backend/src/routes/signup.js
const express = require('express');
const router = express.Router();

// POST /api/signup
router.post('/', (req, res) => {
  const { username } = req.body;
  if (!username || !username.trim()) {
    return res.status(400).json({ success: false, message: 'Handle is required.' });
  }
  // In real impl: check uniqueness, persist user, init NodeSoul, etc.
  res.json({ success: true, message: `NodeSoul awakened for ${username}!` });
});

module.exports = router;
