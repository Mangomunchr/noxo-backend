const radar = [
  { zone: "NodeTemple City", weather: "Mango Monsoon", effect: "Vault taps x2" },
  { zone: "Chaos Ridge", weather: "Mango Fog", effect: "Cooldowns hidden" },
  { zone: "Vault Delta", weather: "Mango Shine", effect: "+1 XP per ritual" }
];

function getMangoRadar() {
  return radar;
}

module.exports = { getMangoRadar };