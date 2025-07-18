const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/status', async (req, res) => {
  const { rows } = await db.query(
    'SELECT id, mango_war_contribution FROM users ORDER BY mango_war_contribution DESC LIMIT 10'
  );
  res.json(rows);
});

module.exports = router;