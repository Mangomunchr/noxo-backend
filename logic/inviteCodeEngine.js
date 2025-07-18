const invites = {
  test123: {
    code: "MANGO42",
    used: ["PushlingX", "NodeTide"]
  },
  rendarling: {
    code: "GIGAVIBE",
    used: []
  }
};

function getInviteCodeData(userId) {
  return invites[userId] || {
    code: "NEW" + Math.random().toString(36).substring(2, 8).toUpperCase(),
    used: []
  };
}

module.exports = { getInviteCodeData };