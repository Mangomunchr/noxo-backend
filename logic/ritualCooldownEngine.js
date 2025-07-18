const cooldowns = {
  "Chaos Pulse": { lastUsed: Date.now() - 1000 * 60 * 9, cooldown: 600 },  // 10m
  "Vault Rain": { lastUsed: Date.now() - 1000 * 60 * 2, cooldown: 300 },   // 5m
  "XP Flame": { lastUsed: Date.now() - 1000 * 60 * 11, cooldown: 600 }     // ready
};

function getCooldownForRitual(name) {
  const now = Date.now();
  const ritual = cooldowns[name] || { lastUsed: now, cooldown: 0 };
  const elapsed = Math.floor((now - ritual.lastUsed) / 1000);
  const remaining = Math.max(0, ritual.cooldown - elapsed);
  return { name, remaining };
}

module.exports = { getCooldownForRitual };