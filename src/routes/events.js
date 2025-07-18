// backend/src/routes/events.js
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// Mock event data
const events = [
  {
    id: uuidv4(),
    name: 'Vaultstrike #8',
    date: '2025-07-16T18:00:00Z',
    type: 'Vaultstrike',
    description: 'Join the next Vaultstrike ritual to earn XP and sigils.',
  },
  {
    id: uuidv4(),
    name: 'Time Attack Frenzy',
    date: '2025-07-17T20:00:00Z',
    type: 'TimeAttack',
    description: 'Compete in a 90s speed lap challenge.',
  },
  {
    id: uuidv4(),
    name: 'Mango Monsoon',
    date: '2025-07-19T15:00:00Z',
    type: 'MangoWar',
    description: 'When the Vault overflows, the Mango Monsoon begins.',
  },
  // Add more upcoming or past events here
];

// GET /api/events
router.get('/', (req, res) => {
  res.json(events);
});

module.exports = router;
