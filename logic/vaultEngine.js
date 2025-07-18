function getVaultSnapshot() {
  return {
    chaosLocked: Math.random() > 0.7,
    load: Math.floor(Math.random() * 100),
    availableSpeeds: [1, 2, 5, 10].filter(() => Math.random() > 0.2)
  };
}

module.exports = { getVaultSnapshot };