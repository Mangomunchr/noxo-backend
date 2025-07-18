function getVaultForecast() {
  const load = Math.floor(Math.random() * 100);
  const chaosRisk = load > 70 ? 'High' : load > 40 ? 'Moderate' : 'Low';
  const recommendedSpeed = load < 30 ? 1 : load < 60 ? 2 : 5;
  return { load, chaosRisk, recommendedSpeed };
}

module.exports = { getVaultForecast };