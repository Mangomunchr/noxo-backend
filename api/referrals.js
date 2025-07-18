const express = require('express');
const router = express.Router();

// GET /api/referrals/code
router.get('/code', async (req, res) => {
  const userId = req.user.id;
  const { pool } = req.app.locals;
  try {
    const result = await pool.query(
      'SELECT referralCode FROM Users WHERE id = $1',
      [userId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ referralCode: result.rows[0].referralcode });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/referrals/claim
router.post('/claim', async (req, res) => {
  const userId = req.user.id;
  const { code } = req.body;
  const { pool } = req.app.locals;
  try {
    const refResult = await pool.query(
      'SELECT id FROM Users WHERE referralCode = $1',
      [code]
    );
    if (refResult.rows.length === 0) {
      return res.status(400).json({ error: 'Invalid referral code' });
    }
    const referrerId = refResult.rows[0].id;
    if (referrerId === userId) {
      return res.status(400).json({ error: 'Cannot refer yourself' });
    }
    const userResult = await pool.query(
      'SELECT referredBy FROM Users WHERE id = $1',
      [userId]
    );
    if (userResult.rows[0].referredby) {
      return res.status(400).json({ error: 'Already referred' });
    }
    await pool.query(
      'INSERT INTO Referrals (referrerUserId, referredUserId) VALUES ($1, $2)',
      [referrerId, userId]
    );
    await pool.query(
      'UPDATE Users SET referredBy = $1 WHERE id = $2',
      [referrerId, userId]
    );
    res.json({ message: 'Referral claimed successfully' });
  } catch (err) {
    if (err.code === '23505') {
      return res.status(400).json({ error: 'Referral already claimed' });
    }
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
