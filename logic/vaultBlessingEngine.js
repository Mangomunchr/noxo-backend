const blessings = [
  { timestamp: "2025-07-15T08:00Z", type: "XP Surge", effect: "+2x XP to all for 1 hour" },
  { timestamp: "2025-07-16T03:00Z", type: "Cooldown Breeze", effect: "-30% cooldowns vault-wide" },
  { timestamp: "2025-07-16T10:30Z", type: "Mango Mercy", effect: "Free vault tap bonus for all roles" }
];

function getVaultBlessings() {
  return blessings;
}

module.exports = { getVaultBlessings };