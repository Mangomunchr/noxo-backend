
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const state = {
  users: {},
};

function initRendar(id) {
  if (!state.users[id]) {
    state.users[id] = {
      xp: 0,
      beans: 0,
      pendingBeans: 0,
      summonCount: 0,
      streak: 0,
      lastSummon: null,
    };
  }
  return state.users[id];
}

app.post('/summon-job', (req, res) => {
  const { rendarId } = req.body;
  if (!rendarId) return res.status(400).json({ error: 'Missing rendarId' });

  const user = initRendar(rendarId);
  const now = Date.now();
  const oneDay = 1000 * 60 * 60 * 24;

  if (!user.lastSummon || now - user.lastSummon > oneDay) {
    user.streak = 1;
  } else {
    user.streak += 1;
  }

  user.lastSummon = now;
  user.xp += 10 * user.streak;
  user.pendingBeans += 5 * user.streak;
  user.summonCount += 1;

  res.json({ message: 'Summon successful', user });
});

app.post('/claim', (req, res) => {
  const { rendarId } = req.body;
  if (!rendarId) return res.status(400).json({ error: 'Missing rendarId' });

  const user = initRendar(rendarId);
  user.beans += user.pendingBeans;
  user.pendingBeans = 0;

  res.json({ message: 'Beans claimed', beans: user.beans });
});

app.get('/vault/:rendarId', (req, res) => {
  const { rendarId } = req.params;
  const user = initRendar(rendarId);
  res.json({
    xp: user.xp,
    beans: user.beans,
    pendingBeans: user.pendingBeans,
    streak: user.streak,
    summonCount: user.summonCount,
  });
});

app.get('/leaderboard', (req, res) => {
  const top = Object.entries(state.users)
    .map(([id, data]) => ({
      rendarId: id,
      beans: data.beans,
      xp: data.xp,
      streak: data.streak,
    }))
    .sort((a, b) => b.beans - a.beans)
    .slice(0, 10);

  res.json(top);
});

app.listen(PORT, () => {
  console.log(`Noxo backend running on http://localhost:${PORT}`);
});
