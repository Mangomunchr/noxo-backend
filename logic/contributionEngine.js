const history = {
  test123: [
    { timestamp: "2025-07-15T11:00:00Z", type: "donated", amount: 25, unit: "XP" },
    { timestamp: "2025-07-16T08:00:00Z", type: "vault tap", amount: 14, unit: "credits" }
  ],
  rendarling: [
    { timestamp: "2025-07-15T13:00:00Z", type: "donated", amount: 10, unit: "XP" }
  ]
};

function getVaultContributions(userId) {
  return history[userId] || [];
}

module.exports = { getVaultContributions };