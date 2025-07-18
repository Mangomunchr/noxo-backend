const readiness = {
  test123: [
    { name: "Summon Storm", ready: true, reason: "XP and Alignment match required levels." },
    { name: "Vault Shard Split", ready: false, reason: "Missing: Ascended Role." }
  ],
  chaosbot: [
    { name: "Summon Storm", ready: false, reason: "XP too low." },
    { name: "Vault Shard Split", ready: false, reason: "Alignment: Drifter." }
  ]
};

function getRitualReadiness(userId) {
  return readiness[userId] || [
    { name: "Summon Storm", ready: false, reason: "Unknown user." },
    { name: "Vault Shard Split", ready: false, reason: "Unknown user." }
  ];
}

module.exports = { getRitualReadiness };