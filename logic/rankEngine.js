const ranks = [
  { title: "Renderling", xpThreshold: 0 },
  { title: "Rendar", xpThreshold: 100 },
  { title: "NodeMonk", xpThreshold: 500 },
  { title: "Ascended", xpThreshold: 1000 },
  { title: "Mythic Node", xpThreshold: 2000 }
];

function getAllRanks() {
  return ranks;
}

module.exports = { getAllRanks };