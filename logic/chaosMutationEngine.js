const mutations = [
  { timestamp: "2025-07-15T12:10:00Z", description: "Vault reversed polarity — reward drain event triggered." },
  { timestamp: "2025-07-16T02:22:00Z", description: "Chaos Rift opened — XP flow inverted for 60 seconds." },
  { timestamp: "2025-07-16T09:40:00Z", description: "Node duplication glitch — 2x job speed activated system-wide." }
];

function getChaosMutations() {
  return mutations;
}

module.exports = { getChaosMutations };