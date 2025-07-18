function calculateXP(jobSize, speedMultiplier) {
  const base = jobSize * 0.1;
  const bonus = speedMultiplier > 1 ? speedMultiplier * 2 : 0;
  return Math.floor(base + bonus);
}

module.exports = { calculateXP };