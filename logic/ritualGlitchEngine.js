const ritualGlitches = [
  { timestamp: "2025-07-14T11:05:00Z", description: "XP Loop stack overflow during Burn Surge", severity: "critical" },
  { timestamp: "2025-07-15T19:45:00Z", description: "NodeMonk timer desync", severity: "moderate" },
  { timestamp: "2025-07-16T04:10:00Z", description: "Chaos Ping double trigger", severity: "minor" }
];

function getRitualGlitchLog() {
  return ritualGlitches;
}

module.exports = { getRitualGlitchLog };