const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  const { rows } = await db.query(
    'SELECT * FROM nodesoul_log WHERE user_id = $1 ORDER BY logged_at DESC LIMIT 50',
    [userId]
  );
  res.json(rows);
});

module.exports = router;