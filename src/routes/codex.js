// backend/src/routes/codex.js
const express = require('express');
const router = express.Router();

// Mock codex history
const history = [
  { date: '2025-07-13', type: 'Vaultstrike', description: 'Participated in Vaultstrike #7', xpChange: 100 },
  { date: '2025-07-12', type: 'TimeAttack', description: 'Completed 12 laps in Time Attack', xpChange: 60 },
  { date: '2025-07-11', type: 'Job', description: 'Summoned GPU job 2h × 3×', xpChange: 60 },
  { date: '2025-07-10', type: 'MangoWar', description: 'Mango War participation bonus', xpChange: 150 },
  { date: '2025-07-09', type: 'Burn', description: 'XP Burn ritual', xpChange: -200 },
  // Add more entries here if desired
];

// GET /api/codex/history
router.get('/history', (req, res) => {
  res.json(history);
});

module.exports = router;
