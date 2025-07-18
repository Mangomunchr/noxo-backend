<<<<<<< HEAD
// jobController.js - Finalized dev-ready module placeholder
=======
// controllers/jobController.js
require('dotenv').config();
const express = require('express');
const router = express.Router();
const grantReferralReward = require('../utils/grantReferralReward');
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Endpoint to complete a job
router.post('/:jobId/complete', async (req, res) => {
  const { jobId } = req.params;
  const userId     = req.user.id;
  try {
    // 1) Mark the job as completed in your jobs table
    await pool.query(
      `UPDATE Jobs SET status = 'completed', completedAt = now()
       WHERE id = $1 AND userid = $2`,
      [jobId, userId]
    );

    // 2) Grant referral reward if applicable
    await grantReferralReward(userId);

    res.json({ message: 'Job completed and rewards processed' });
  } catch (err) {
    console.error('Job completion error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
>>>>>>> 865297188b33778ee0043fc41823c9663ae65614
