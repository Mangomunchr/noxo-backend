const ritualPatchNotes = [
  {
    version: "v1.5.3",
    date: "2025-07-16",
    notes: [
      "Chaos Beacon now auto-triggers Vault Lock at 90% load.",
      "New Mango Weather: Mango Tornado (x3 chaos radius).",
      "XP Rituals grant +2 bonus XP during Mango Shine."
    ]
  },
  {
    version: "v1.5.2",
    date: "2025-07-15",
    notes: [
      "Vault Mood system rotated every 3 hours.",
      "Burn Ritual now shows live countdown overlay.",
      "Added Ritual Cooldown Tracker panel to dashboard."
    ]
  }
];

function getRitualPatchNotes() {
  return ritualPatchNotes;
}

module.exports = { getRitualPatchNotes };