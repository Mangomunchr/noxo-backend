const streaks = {
  'test123': 3,
  'nodemonk001': 5,
  'rendarling': 1
};

function getUserStreak(userId) {
  return streaks[userId] || 0;
}

module.exports = { getUserStreak };