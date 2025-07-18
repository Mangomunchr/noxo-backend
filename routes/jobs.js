const express = require('express');
const router = express.Router();
const db = require('../db');
const { v4: uuidv4 } = require('uuid');

router.post('/submit', async (req, res) => {
  const { userId, prompt, speed, summonMultiplier } = req.body;

  const cooldownRes = await db.query('SELECT summon_cooldown_until FROM users WHERE id = $1', [userId]);
  const lockout = cooldownRes.rows[0]?.summon_cooldown_until;

  if (lockout && new Date(lockout) > new Date()) {
    return res.status(429).json({ error: 'In cooldown' });
  }

  await db.query("UPDATE users SET summon_cooldown_until = NOW() + INTERVAL '30 seconds' WHERE id = $1", [userId]);

  const id = uuidv4();
  await db.query(
    'INSERT INTO jobs (id, user_id, prompt, speed, status, created_at, summon_multiplier) VALUES ($1, $2, $3, $4, $5, NOW(), $6)',
    [id, userId, prompt, speed, 'queued', summonMultiplier]
  );

  res.json({ success: true });
});

router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params;
  const { rows } = await db.query(
    'SELECT id, prompt, status FROM jobs WHERE user_id = $1 ORDER BY created_at DESC LIMIT 10',
    [userId]
  );
  res.json(rows);
});

module.exports = router;
