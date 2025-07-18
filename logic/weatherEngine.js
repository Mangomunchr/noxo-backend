function getVaultWeather() {
  const types = ["None", "Mango Monsoon", "Chompy Eclipse"];
  return types[Math.floor(Math.random() * types.length)];
}

module.exports = { getVaultWeather };