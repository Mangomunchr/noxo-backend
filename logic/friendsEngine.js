const friendsDB = {
  test123: [
    { username: "NodeBro88", online: true },
    { username: "RenderSis", online: false }
  ],
  rendarling: [
    { username: "VaultVibe", online: true }
  ]
};

function getFriendsList(userId) {
  return friendsDB[userId] || [];
}

module.exports = { getFriendsList };