const bonuses = [
  { type: "XP Ritual", bonus: "+25% XP Gain" },
  { type: "Vault Tap", bonus: "+2 Credit Per Tap" },
  { type: "Burn Offering", bonus: "Double Chaos Multiplier" }
];

function getWeeklyBonuses() {
  return bonuses;
}

module.exports = { getWeeklyBonuses };