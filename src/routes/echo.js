// backend/src/routes/echo.js
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

let entries = [];

// GET /api/echo/entries
router.get('/entries', (req, res) => {
  res.json(entries);
});

// POST /api/echo/prompt
router.post('/prompt', (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'Prompt required' });

  // Mock response generation
  const response = `Echo whispers: "${prompt.split('').reverse().join('')}"`;
  const entry = { id: uuidv4(), prompt, response, votes: 0 };
  entries.unshift(entry);
  res.json(entry);
});

module.exports = router;
