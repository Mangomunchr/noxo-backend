function getMangoVaultStatus() {
  const value = parseFloat((Math.random() * 1337).toFixed(2));
  const filled = parseFloat((value / 1337) * 100);
  return { value, filled };
}

module.exports = { getMangoVaultStatus };