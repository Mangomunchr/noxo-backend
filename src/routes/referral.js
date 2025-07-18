// backend/src/routes/referral.js
const express = require('express');
const router = express.Router();

// In-memory referral data
let yourCode = 'ABC123';
let invited = [
  { userId: 'Rendar_7', xp: 50 },
  { userId: 'NodeMonk_12', xp: 50 },
];

// GET /api/referral/status
router.get('/status', (req, res) => {
  const totalInvites = invited.length;
  const bonusXpEarned = invited.reduce((sum, u) => sum + u.xp, 0);
  res.json({ yourCode, totalInvites, bonusXpEarned, invited });
});

module.exports = router;
