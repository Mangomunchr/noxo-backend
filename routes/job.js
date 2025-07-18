const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const jobEngine = require('../engine/jobEngine');
const { addXP } = require('../engine/userDataStore');

router.post('/submit', auth, (req, res) => {
  const { hours, multiplier } = req.body;
  const result = jobEngine.submitJob(req.user.id, hours, multiplier);
  addXP(req.user.id, result.xpAwarded, 'Job');
  res.json(result);
});

module.exports = router;