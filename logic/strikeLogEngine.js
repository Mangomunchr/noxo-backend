const strikeDB = {
  "test123": [
    { timestamp: "2025-07-14T13:00:00Z", reason: "Failed vault sync", severity: "medium" },
    { timestamp: "2025-07-16T09:10:00Z", reason: "Chaos ritual misfire", severity: "high" }
  ],
  "rendarling": [
    { timestamp: "2025-07-15T18:00:00Z", reason: "Aborted node summon", severity: "low" }
  ]
};

function getStrikeLogForUser(userId) {
  return strikeDB[userId] || [];
}

module.exports = { getStrikeLogForUser };