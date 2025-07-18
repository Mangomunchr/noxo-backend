const express = require('express');
const router = express.Router();
let jobs = []; // In-memory for MVP

router.post('/jobs', (req, res) => {
  const { title, inputURL } = req.body;
  const job = { id: Date.now(), title, inputURL, status: 'open' };
  jobs.push(job);
  res.status(201).json(job);
});

router.get('/jobs', (req, res) => {
  res.json(jobs.filter(j => j.status === 'open'));
});

router.patch('/jobs/:id/claim', (req, res) => {
  const job = jobs.find(j => j.id == req.params.id);
  if (job && job.status === 'open') {
    job.status = 'claimed';
    console.log(`[Vault] Job ${job.id} claimed. XP reward triggered.`);
    return res.json({ message: 'Job claimed' });
  }
  res.status(404).json({ error: 'Job not found or already claimed' });
});

module.exports = router;
