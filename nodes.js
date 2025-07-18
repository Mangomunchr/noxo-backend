const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/register', async (req, res) => {
  const { id, gpu_model, ip_address } = req.body;
  await db.query('INSERT INTO nodes (id, gpu_model, ip_address, status, last_ping) VALUES ($1, $2, $3, $4, NOW()) ON CONFLICT (id) DO UPDATE SET last_ping = NOW()', [id, gpu_model, ip_address, 'online']);
  res.json({ registered: true });
});

router.get('/list', async (req, res) => {
  const { rows } = await db.query('SELECT * FROM nodes ORDER BY last_ping DESC');
  res.json(rows);
});

module.exports = router;