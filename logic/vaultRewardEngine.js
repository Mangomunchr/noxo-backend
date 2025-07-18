const rewardPool = {
  "test123": [
    { amount: 20, unit: "XP" },
    { amount: 5, unit: "credits" }
  ],
  "rendarling": [
    { amount: 10, unit: "XP" }
  ]
};

function getUserVaultRewards(userId) {
  return rewardPool[userId] || [];
}

function claimUserVaultRewards(userId) {
  rewardPool[userId] = [];
}

module.exports = { getUserVaultRewards, claimUserVaultRewards };