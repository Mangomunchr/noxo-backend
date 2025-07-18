// backend/src/routes/login.js
const express = require('express');
const router = express.Router();

// POST /api/login
router.post('/', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username and password required.' });
  }
  // Stub authentication: accept any non-empty credentials
  const token = `stub-token-${username}-${Date.now()}`;
  res.json({ success: true, token });
});

module.exports = router;
