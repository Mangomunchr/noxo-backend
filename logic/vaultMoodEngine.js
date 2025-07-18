const moods = [
  { name: "Tranquil Bloom", description: "XP gains slowed, but burn risk reduced." },
  { name: "Rising Pulse", description: "Chaos chance slightly elevated. XP bonuses up." },
  { name: "Lurking Surge", description: "Vault unstable. Rare boosts and rare risks." },
  { name: "Eclipse Calm", description: "Chaos storm recently passed. Cooldowns eased." }
];

function getVaultMood() {
  const index = Math.floor(Math.random() * moods.length);
  return moods[index];
}

module.exports = { getVaultMood };