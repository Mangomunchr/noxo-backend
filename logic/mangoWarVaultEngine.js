const mangoVault = [
  { username: "VaultSage", amount: 77 },
  { username: "Pushling42", amount: 66 },
  { username: "NodeFire", amount: 49 },
  { username: "RendarMancer", amount: 38 },
  { username: "ChaosSprout", amount: 21 }
];

function getMangoWarVaultContributions() {
  return mangoVault.sort((a, b) => b.amount - a.amount);
}

module.exports = { getMangoWarVaultContributions };