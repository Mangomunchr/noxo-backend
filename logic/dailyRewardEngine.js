const lastClaim = {};
const streaks = {};

function getDailyReward(userId) {
  const now = new Date();
  const today = now.toISOString().split('T')[0];
  const last = lastClaim[userId];
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const yStr = yesterday.toISOString().split('T')[0];

  if (last === today) {
    return { amount: 0, streak: streaks[userId] || 1 };
  }

  if (last === yStr) {
    streaks[userId] = (streaks[userId] || 1) + 1;
  } else {
    streaks[userId] = 1;
  }

  const bonus = 10 + streaks[userId] * 2;
  lastClaim[userId] = today;
  return { amount: bonus, streak: streaks[userId] };
}

module.exports = { getDailyReward };