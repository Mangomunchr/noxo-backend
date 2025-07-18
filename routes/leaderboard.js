const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  try {
    const { rows } = await db.query(
      'SELECT id, xp, credits FROM users ORDER BY xp DESC LIMIT 10'
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Leaderboard fetch failed' });
  }
});

module.exports = router;
