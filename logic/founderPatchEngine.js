function processFounderCommand(command) {
  switch (command) {
    case 'unlockChaos':
      return 'Chaos system unlocked for testing.';
    case 'resetCooldowns':
      return 'All ritual cooldowns reset.';
    case 'boostXP':
      return 'XP rate temporarily boosted.';
    default:
      return 'Invalid command.';
  }
}

module.exports = { processFounderCommand };