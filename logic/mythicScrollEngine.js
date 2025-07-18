const scrollData = {
  test123: [
    { name: "Chaos Codex", status: "unlocked" },
    { name: "Summon Storm Ritual", status: "locked" },
    { name: "Vault Shard Split", status: "locked" }
  ],
  rendarling: [
    { name: "Chaos Codex", status: "locked" },
    { name: "Summon Storm Ritual", status: "locked" },
    { name: "Vault Shard Split", status: "locked" }
  ]
};

function getMythicScrolls(userId) {
  return scrollData[userId] || [];
}

module.exports = { getMythicScrolls };