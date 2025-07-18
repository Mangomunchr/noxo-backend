const settingsStore = {
  test123: { theme: "dark", notifications: true },
  rendarling: { theme: "light", notifications: false }
};

function getUserSettings(userId) {
  return settingsStore[userId] || { theme: "dark", notifications: true };
}

function saveUserSettings(userId, settings) {
  settingsStore[userId] = settings;
}

module.exports = { getUserSettings, saveUserSettings };