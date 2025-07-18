const alerts = [
  { id: 1, message: "Vault is reaching critical load. Chaos may trigger soon." },
  { id: 2, message: "Mythic Node unlocked. XP surge active for 5m." }
];

function getActiveAlerts() {
  return alerts;
}

module.exports = { getActiveAlerts };