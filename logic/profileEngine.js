const users = {
  "test123": {
    userId: "test123",
    username: "MangoMunchr",
    xp: 840,
    role: "NodeMonk",
    joined: "2025-05-01T10:00:00Z"
  },
  "rendarling": {
    userId: "rendarling",
    username: "Renderling42",
    xp: 95,
    role: "Renderling",
    joined: "2025-07-01T13:24:00Z"
  }
};

function getUserProfile(userId) {
  return users[userId] || {
    userId,
    username: "Unknown",
    xp: 0,
    role: "Renderling",
    joined: new Date().toISOString()
  };
}

module.exports = { getUserProfile };