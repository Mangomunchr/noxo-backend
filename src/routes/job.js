// backend/src/routes/job.js
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// POST /api/job/submit
router.post('/submit', (req, res) => {
  const { hours, multiplier } = req.body;
  if (!hours || !multiplier) {
    return res.status(400).json({ error: 'Invalid parameters' });
  }

  // Business logic: cost = $0.20 * hours * multiplier
  const rate = 0.20;
  const cost = parseFloat((hours * rate * multiplier).toFixed(2));
  // XP earned = base_xp_per_job * multiplier * hours factor
  const xp = Math.floor(multiplier * hours * 10);
  const jobId = uuidv4();
  const eta = Math.max(1, Math.floor(60 / multiplier)); // seconds

  // In real DB, record the job here...

  res.json({
    jobId,
    xpAwarded: xp,
    cost,
    etaSeconds: eta,
  });
});

module.exports = router;
