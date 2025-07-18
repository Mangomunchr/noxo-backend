const express = require('express');
const router = express.Router();
const { getXP } = require('../engine/userDataStore');
const auth = require('../middleware/authMiddleware');

router.get('/', auth, (req, res) => {
  const totalXP = getXP(req.user.id);
  res.json({ totalXP });
});

module.exports = router;