let chaosActive = false;

function getChaosState() {
  return { chaosActive };
}

function triggerChaosEvent(userId) {
  if (chaosActive) {
    return { success: false, message: "Already active" };
  }
  chaosActive = true;
  return { success: true, message: "Chaos triggered", triggeredBy: userId };
}

module.exports = { getChaosState, triggerChaosEvent };