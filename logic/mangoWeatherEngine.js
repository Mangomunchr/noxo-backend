const forecasts = [
  "🌤️ Mango Monsoon – Vault tap yields x2 for 12h.",
  "🌪️ Mango Tornado – Chaos rituals spread rapidly.",
  "🌫️ Mango Fog – Cooldown timers obfuscated.",
  "☀️ Mango Shine – XP bonuses boosted globally.",
  "🌧️ Mango Drizzle – Vault balance steadily climbs."
];

function getMangoWeather() {
  const index = Math.floor(Math.random() * forecasts.length);
  return { forecast: forecasts[index] };
}

module.exports = { getMangoWeather };