const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/login', async (req, res) => {
  const { userId } = req.body;
  const exists = await db.query('SELECT id FROM users WHERE id = $1', [userId]);
  if (!exists.rows.length) {
    await db.query('INSERT INTO users (id, xp, streak, credits, mango_war_contribution, last_cast) VALUES ($1, 0, 0, 0, 0, NOW())', [userId]);
  }
  res.json({ loggedIn: true });
});

router.post('/retire', async (req, res) => {
  const { userId } = req.body;
  await db.query('UPDATE users SET xp = 0, streak = 0 WHERE id = $1', [userId]);
  await db.query('INSERT INTO nodesoul_log (user_id, action, data) VALUES ($1, $2, $3)', [userId, 'retire', { at: Date.now() }]);
  res.json({ retired: true });
});

module.exports = router;