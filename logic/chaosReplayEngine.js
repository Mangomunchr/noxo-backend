const chaosReplays = [
  {
    timestamp: "2025-07-15T13:30:00Z",
    triggeredBy: "Pushling99",
    event: "Vault Storm Override"
  },
  {
    timestamp: "2025-07-16T01:20:00Z",
    triggeredBy: "NodeMonkX",
    event: "Mango Overload Chaos Break"
  },
  {
    timestamp: "2025-07-16T05:44:00Z",
    triggeredBy: "VaultWraith",
    event: "XP Shatter + Ritual Lock"
  }
];

function getChaosReplays() {
  return chaosReplays;
}

module.exports = { getChaosReplays };