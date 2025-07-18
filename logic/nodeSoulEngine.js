const nodeSoulMemories = {
  test123: [
    { timestamp: "2025-07-15T08:00:00Z", type: "Ritual", detail: "Joined Chaos Cleanse" },
    { timestamp: "2025-07-16T10:45:00Z", type: "Burn", detail: "Destroyed 12 XP" }
  ],
  rendarling: [
    { timestamp: "2025-07-15T16:20:00Z", type: "Summon", detail: "Spawned Mango Ritual Shard" }
  ]
};

function getNodeSoulMemory(userId) {
  return nodeSoulMemories[userId] || [];
}

module.exports = { getNodeSoulMemory };