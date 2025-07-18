
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

let userVaults = {};
let userQuests = {};
let jobHistory = [];

function getDefaultQuests() {
  return [
    { id: 'q1', title: 'Summon 5 Jobs', type: 'daily', progress: 0, goal: 5, complete: false, reward: { beans: 150, xp: 0 }, rewarded: false },
    { id: 'q2', title: 'Claim 200 Beans', type: 'weekly', progress: 0, goal: 200, complete: false, reward: { beans: 0, xp: 300 }, rewarded: false }
  ];
}

function updateQuestProgress(rendarId, action, amount = 1) {
  const quests = userQuests[rendarId] || getDefaultQuests().map(q => ({ ...q }));
  quests.forEach(q => {
    if (q.complete) return;
    if (q.id === 'q1' && action === 'summon') {
      q.progress += amount;
    } else if (q.id === 'q2' && action === 'claim') {
      q.progress += amount;
    }
    if (q.progress >= q.goal) {
      q.complete = true;
      q.progress = q.goal;
    }
  });
  userQuests[rendarId] = quests;
}

function applyQuestRewards(rendarId) {
  const vault = userVaults[rendarId];
  const quests = userQuests[rendarId] || [];
  quests.forEach(q => {
    if (q.complete && !q.rewarded) {
      vault.pending += q.reward.beans;
      vault.xp += q.reward.xp;
      q.rewarded = true;
      console.log(`🎁 ${rendarId} received quest reward: +${q.reward.beans} beans, +${q.reward.xp} XP`);
    }
  });
}

app.post('/api/summon-job', (req, res) => {
  const { jobName, rendarId } = req.body;
  if (!jobName || !rendarId) return res.status(400).json({ message: 'Missing jobName or rendarId' });

  if (!userVaults[rendarId]) {
    userVaults[rendarId] = { xp: 0, pending: 0, streak: 0, multiplier: 1.0 };
  }

  jobHistory.unshift({ rendarId, jobName, time: new Date().toISOString() });
  if (jobHistory.length > 50) jobHistory.pop();

  const vault = userVaults[rendarId];
  vault.xp += 137;
  vault.pending += 69;

  updateQuestProgress(rendarId, 'summon');
  applyQuestRewards(rendarId);

  res.json({ message: `Job '${jobName}' summoned by ${rendarId}`, status: 'success' });
});

app.post('/api/claim-beans', (req, res) => {
  const { rendarId } = req.body;
  if (!rendarId || !userVaults[rendarId]) return res.status(400).json({ message: 'Invalid rendarId' });

  const vault = userVaults[rendarId];
  let claimed = vault.pending;
  if (vault.xp >= 10000) claimed *= 2;
  vault.pending = 0;

  updateQuestProgress(rendarId, 'claim', claimed);
  applyQuestRewards(rendarId);

  res.json({ claimed, xp: vault.xp });
});

app.get('/api/quests', (req, res) => {
  const { rendarId } = req.query;
  if (!rendarId) return res.status(400).json({ message: 'Missing rendarId' });

  if (!userQuests[rendarId]) {
    userQuests[rendarId] = getDefaultQuests().map(q => ({ ...q }));
  }

  res.json(userQuests[rendarId]);
});

app.listen(PORT, () => {
  console.log(`Farpy backend (quest rewards) running on http://localhost:${PORT}`);
});
