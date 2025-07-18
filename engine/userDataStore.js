const db = require('./db');

function getXP(userId) {
  return db.data.users[userId]?.xp || 0;
}

function addXP(userId, amount, reason = "Job") {
  db.data.users[userId] ||= { xp: 0 };
  db.data.users[userId].xp += amount;

  db.data.codex[userId] ||= [];
  db.data.codex[userId].push({
    date: new Date().toISOString().split('T')[0],
    type: reason,
    description: `+${amount} XP via ${reason}`,
    xpChange: amount
  });

  db.write();
}

function getCodex(userId) {
  return db.data.codex[userId] || [];
}

module.exports = { getXP, addXP, getCodex };