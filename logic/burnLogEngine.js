const burns = [
  { timestamp: "2025-07-15T07:45:00Z", user: "VaultGhost", amount: 20, unit: "XP" },
  { timestamp: "2025-07-16T01:20:00Z", user: "Rendarling", amount: 5, unit: "credits" },
  { timestamp: "2025-07-16T11:00:00Z", user: "ChaosMonk", amount: 12, unit: "XP" }
];

function getBurnLog() {
  return burns;
}

module.exports = { getBurnLog };