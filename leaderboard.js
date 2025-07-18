const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const db = require('../db');

router.get('/', async (req, res) => {
  const { rows } = await db.query(
    'SELECT id AS userId, xp, streak FROM users ORDER BY xp DESC LIMIT 20'
  );
  res.json(rows);
=======
const { getLeaderboard } = require('../logic/leaderboardEngine');

router.get('/leaderboard', (req, res) => {
  res.json(getLeaderboard());
>>>>>>> 865297188b33778ee0043fc41823c9663ae65614
});

module.exports = router;