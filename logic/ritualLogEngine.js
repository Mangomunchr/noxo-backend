const ritualHistory = [
  { timestamp: "2025-07-15T08:10:00Z", type: "XP Surge", user: "NodeGuru" },
  { timestamp: "2025-07-15T13:45:00Z", type: "Cooldown Cleanse", user: "Pushling88" },
  { timestamp: "2025-07-16T06:20:00Z", type: "Mythic Ping", user: "VaultMaster" }
];

function getRitualHistory() {
  return ritualHistory;
}

module.exports = { getRitualHistory };