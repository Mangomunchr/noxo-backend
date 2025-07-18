// backend/src/routes/roles.js
const express = require('express');
const router = express.Router();

// Stubbed promotion requirements
const promotionRequirements = {
  "Renderling_to_Rendar": {
    xp: 250,
    job_success_rate: ">= 75%"
  },
  "Rendar_to_NodeMonk": {
    xp: 600,
    nsr: ">= 1400",
    rd: "<= 70"
  },
  "NodeMonk_to_Vaultwarden": {
    xp: 1200,
    nsr: ">= 1800",
    rituals: ["Vaultstrike"]
  },
  "Vaultwarden_to_CodexSentinel": {
    xp: 1800,
    nsr: ">= 2100",
    burn_event: ">= 1000 XP"
  },
  "CodexSentinel_to_Omniscient": {
    xp: 2500,
    nsr: ">= 2400",
    "completed_roles": ["All previous"]
  }
};

// GET /api/roles
router.get('/', (req, res) => {
  res.json(promotionRequirements);
});

module.exports = router;
