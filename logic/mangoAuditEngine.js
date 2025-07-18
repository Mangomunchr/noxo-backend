const audit = [
  { timestamp: "2025-07-15T13:00:00Z", user: "Pushling88", action: "donated", amount: 42, unit: "credits" },
  { timestamp: "2025-07-16T02:15:00Z", user: "NodeMonkAlpha", action: "withdrew", amount: 10, unit: "XP" },
  { timestamp: "2025-07-16T07:30:00Z", user: "ChaosBot", action: "burned", amount: 3, unit: "vault shards" }
];

function getMangoAuditLog() {
  return audit;
}

module.exports = { getMangoAuditLog };