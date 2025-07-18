const alignmentData = {
  test123: {
    alignment: "Disciplined",
    discipline: 92,
    commentary: "Shows extreme focus and ritual consistency. Eligible for sacred scroll unlock."
  },
  chaosling: {
    alignment: "Drifter",
    discipline: 38,
    commentary: "Often strays from core path. Ritual timing erratic, caution recommended."
  }
};

function getNodeAlignment(userId) {
  return alignmentData[userId] || {
    alignment: "Unknown",
    discipline: 0,
    commentary: "No data yet. Begin rituals to reveal your pattern."
  };
}

module.exports = { getNodeAlignment };