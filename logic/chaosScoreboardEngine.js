const chaosData = [
  { username: "ChaosWarden", chaosPoints: 290 },
  { username: "NodeMonkX", chaosPoints: 245 },
  { username: "Pushling88", chaosPoints: 220 },
  { username: "VaultGhost", chaosPoints: 190 },
  { username: "Overheat777", chaosPoints: 170 }
];

function getChaosScoreboard() {
  return chaosData;
}

module.exports = { getChaosScoreboard };