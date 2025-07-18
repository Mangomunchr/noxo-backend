const referralDB = {
  test123: [
    { username: "newmonk01", joined: "2025-07-10T14:00:00Z", status: "active" },
    { username: "mangobuddy", joined: "2025-07-11T16:00:00Z", status: "awaiting XP" }
  ],
  rendarling: []
};

function getReferralData(userId) {
  return referralDB[userId] || [];
}

module.exports = { getReferralData };