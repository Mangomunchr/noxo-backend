const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

router.get('/multipliers', auth, (req, res) => {
  res.json({
    available: [1, 2, 5, 10, 25],
    locked: [50, 100]
  });
});

module.exports = router;