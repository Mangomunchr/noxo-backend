const express = require('express');
const router = express.Router();
const { getCodex } = require('../engine/userDataStore');
const auth = require('../middleware/authMiddleware');

router.get('/history', auth, (req, res) => {
  const history = getCodex(req.user.id);
  res.json(history);
});

module.exports = router;