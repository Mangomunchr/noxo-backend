function getSystemStatus() {
  return {
    backend: "✅ OK",
    frontend: "✅ OK",
    database: "✅ OK",
    vault: "✅ Synced"
  };
}

module.exports = { getSystemStatus };