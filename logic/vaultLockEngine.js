const locked = true;
const reason = "System-wide Chaos Ritual triggered by Vault Overload.";

function getVaultLockStatus() {
  return {
    locked,
    reason
  };
}

module.exports = { getVaultLockStatus };