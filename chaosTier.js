const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/status/:userId', async (req, res) => {
  const { userId } = req.params;
  const { rows } = await db.query('SELECT chaos_unlocked FROM users WHERE id = $1', [userId]);
  res.json({ chaos: rows[0]?.chaos_unlocked || false });
});

module.exports = router;