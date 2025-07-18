const db = require('./db');

function getVaultStatus(userId) {
  return {
    vaultBalance: db.data.vault.balance,
    xpPerJob: 50,
    userSharePercent: 2.5,
    monthlyProjection: 133.7
  };
}

function claimVault(userId) {
  const claimed = 25;
  db.data.vault.balance -= claimed;
  db.write();
  return { claimed, newBalance: db.data.vault.balance };
}

module.exports = { getVaultStatus, claimVault };