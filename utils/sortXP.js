function sortByXP(users) {
  return users.sort((a, b) => b.xp - a.xp);
}

module.exports = { sortByXP };