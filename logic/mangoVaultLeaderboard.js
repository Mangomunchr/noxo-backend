const contributions = [
  { username: "NodeBoss", total: 228 },
  { username: "RendarZen", total: 174 },
  { username: "MonkStreak", total: 165 },
  { username: "XPStreamer", total: 133 },
  { username: "Pushling999", total: 101 }
];

function getTopDonors() {
  return contributions.sort((a, b) => b.total - a.total);
}

module.exports = { getTopDonors };