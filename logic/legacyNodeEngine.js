const retiredNodes = [
  { name: "NodeZero", rank: "Mythic", retiredAt: "2025-07-10T10:00:00Z" },
  { name: "DeepVault99", rank: "Ascended", retiredAt: "2025-07-11T15:30:00Z" },
  { name: "Pushling5", rank: "NodeMonk", retiredAt: "2025-07-14T22:45:00Z" }
];

function getLegacyNodes() {
  return retiredNodes;
}

module.exports = { getLegacyNodes };