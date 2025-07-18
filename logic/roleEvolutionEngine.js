const evolutions = {
  test123: [
    { timestamp: "2025-07-14T10:00:00Z", from: "Renderling", to: "Rendar" },
    { timestamp: "2025-07-15T18:00:00Z", from: "Rendar", to: "NodeMonk" }
  ],
  rendarling: [
    { timestamp: "2025-07-15T20:00:00Z", from: "Renderling", to: "Rendar" }
  ]
};

function getRoleEvolutionHistory(userId) {
  return evolutions[userId] || [];
}

module.exports = { getRoleEvolutionHistory };