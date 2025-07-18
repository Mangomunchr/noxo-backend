const driftState = {
  level: "High",
  outlook: "Unstable ritual behavior expected.",
  advice: "Avoid triggering high-tier chaos rituals for the next 60 minutes."
};

function getChaosDrift() {
  return driftState;
}

module.exports = { getChaosDrift };