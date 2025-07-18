const logStore = {
  test123: [
    { timestamp: "2025-07-15T14:00:00Z", amount: 15, reason: "Job Completed" },
    { timestamp: "2025-07-15T14:05:00Z", amount: 10, reason: "Chaos Bonus" },
    { timestamp: "2025-07-15T14:30:00Z", amount: 5, reason: "Streak Bonus" }
  ],
  rendarling: [
    { timestamp: "2025-07-15T15:00:00Z", amount: 8, reason: "Rendar Submission" }
  ]
};

function getXPLog(userId) {
  return logStore[userId] || [];
}

module.exports = { getXPLog };