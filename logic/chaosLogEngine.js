const chaosEvents = [
  { timestamp: "2025-07-15T14:12:00Z", triggeredBy: "NodeMonk_7", event: "Chaos Ritual - Vault Storm" },
  { timestamp: "2025-07-16T09:47:00Z", triggeredBy: "PushlingX", event: "Chaos Cleanse - Cooldown Reset" },
  { timestamp: "2025-07-16T11:30:00Z", triggeredBy: "MonkAlpha", event: "Mythic Ping" }
];

function getChaosLog() {
  return chaosEvents;
}

module.exports = { getChaosLog };