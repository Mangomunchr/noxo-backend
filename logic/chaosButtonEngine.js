const chaosHistory = [
  {
    timestamp: "2025-07-13T15:00:00Z",
    user: "VaultGhost",
    effect: "XP Overdrive"
  },
  {
    timestamp: "2025-07-15T03:20:00Z",
    user: "NodeMonkX",
    effect: "Summon Storm"
  },
  {
    timestamp: "2025-07-16T06:42:00Z",
    user: "ChaosWarden",
    effect: "Cooldown Wipe"
  }
];

function getChaosButtonHistory() {
  return chaosHistory;
}

module.exports = { getChaosButtonHistory };