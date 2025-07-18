const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/cast', async (req, res) => {
  const { userId } = req.body;
  const { rows } = await db.query('SELECT xp, streak, last_cast FROM users WHERE id = $1', [userId]);
  const user = rows[0];
  const now = new Date();
  const last = new Date(user.last_cast);
  if ((now - last) / 1000 < 30) return res.status(429).json({ remaining: 30 - Math.floor((now - last) / 1000) });

  const newXP = user.xp + 120;
  const newStreak = user.streak + 1;
  await db.query('UPDATE users SET xp = $1, streak = $2, last_cast = NOW() WHERE id = $3', [newXP, newStreak, userId]);
  await db.query('INSERT INTO nodesoul_log (user_id, action, data) VALUES ($1, $2, $3)', [userId, 'ritual_cast', { newXP, newStreak }]);
  res.json({ xpGained: 120, newStreak });
});

router.post('/chaos-unlock', async (req, res) => {
  const { userId } = req.body;
  const { rows } = await db.query('SELECT xp, streak FROM users WHERE id = $1', [userId]);
  const { xp, streak } = rows[0];
  if (xp > 5000 || streak > 100) {
    await db.query('UPDATE users SET chaos_unlocked = TRUE WHERE id = $1', [userId]);
    return res.json({ success: true });
  }
  res.json({ success: false });
});

router.post('/mango', async (req, res) => {
  const { userId } = req.body;
  await db.query('UPDATE users SET mango_war_contribution = mango_war_contribution + 1 WHERE id = $1', [userId]);
  await db.query('INSERT INTO nodesoul_log (user_id, action, data) VALUES ($1, $2, $3)', [userId, 'mango_offer', { time: Date.now() }]);
  res.json({ success: true });
});

module.exports = router;