// backend/src/routes/chaos.js
const express = require('express');
const router = express.Router();

// In-memory world state and timer
let flags = {
  vaultstrike_active: false,
  mango_war_ongoing: false,
  chaos_mode: false
};

let nextEvent = Date.now() + 5 * 60 * 1000; // 5 minutes from start

// GET /api/chaos/status
router.get('/status', (req, res) => {
  // Toggle flags randomly every call for stub demo
  flags.vaultstrike_active = Math.random() < 0.5;
  flags.mango_war_ongoing = Math.random() < 0.5;
  flags.chaos_mode = Math.random() < 0.2;

  const now = Date.now();
  let remaining = Math.floor((nextEvent - now) / 1000);
  if (remaining <= 0) {
    // schedule next event in 5–10 mins
    nextEvent = now + (5 + Math.floor(Math.random() * 6)) * 60 * 1000;
    remaining = Math.floor((nextEvent - now) / 1000);
  }

  res.json({
    flags,
    nextEventCountdown: remaining
  });
});

module.exports = router;
