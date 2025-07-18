const notes = [
  { version: "v1.5.0", note: "Chaos Button added. Ritual console enabled." },
  { version: "v1.5.1", note: "Vault XP logic optimized. NodeMonk leaderboard live." },
  { version: "v1.5.2", note: "Summon Forecast UI integrated. Streak system updated." },
  { version: "v1.5.3", note: "Vault Weather and Mango Vault overlays now active." }
];

function getPatchNotes() {
  return notes;
}

module.exports = { getPatchNotes };