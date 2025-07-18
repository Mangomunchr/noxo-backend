const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const db = require('../db');

router.get('/stats/:userId', async (req, res) => {
  const { userId } = req.params;
  const { rows } = await db.query(
    'SELECT xp, streak, credits, 1 as multiplier, 5 as syncedNodes FROM users WHERE id = $1',
    [userId]
  );
  res.json(rows[0]);
});

router.get('/forecast/:userId', async (req, res) => {
  const { userId } = req.params;
  const { rows } = await db.query(
    'SELECT xp FROM users WHERE id = $1',
    [userId]
  );
  const credits = rows[0].xp * 0.01;
  res.json({ credits });
});

router.post('/claim', async (req, res) => {
  const { userId } = req.body;
  const { rows } = await db.query('SELECT xp FROM users WHERE id = $1', [userId]);
  const xp = rows[0].xp;
  await db.query('UPDATE users SET xp = 0, credits = credits + $1 WHERE id = $2', [xp * 0.01, userId]);
  await db.query('INSERT INTO payouts (user_id, amount, claimed_at) VALUES ($1, $2, NOW())', [userId, xp * 0.01]);
  res.json({ claimed: true });
});

router.get('/weather', (req, res) => {
  const weathers = ['🌪️ Chaos Storm', '☀️ Clear', '🌧️ Ritual Rain', '🌑 Eclipse'];
  const current = weathers[Math.floor(Date.now() / 60000) % weathers.length];
  res.json({ weather: current });
=======
const { getVaultSnapshot } = require('../logic/vaultEngine');

router.get('/vault/status', (req, res) => {
  res.json(getVaultSnapshot());
>>>>>>> 865297188b33778ee0043fc41823c9663ae65614
});

module.exports = router;