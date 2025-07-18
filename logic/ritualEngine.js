function triggerRitual(type) {
  const effects = {
    "XP Surge": "All XP gains +20% for 5m",
    "Cooldown Cleanse": "Chaos cooldowns cleared",
    "Mythic Ping": "Mythic Nodes pinged system-wide"
  };

  return {
    success: true,
    ritual: type,
    effect: effects[type] || "Unknown effect"
  };
}

module.exports = { triggerRitual };