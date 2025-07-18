const { LowSync } = require('lowdb');
const { JSONFileSync } = require('lowdb/node');
const fs = require('fs');

if (!fs.existsSync('./data')) fs.mkdirSync('./data');

const adapter = new JSONFileSync('./data/db.json');
const db = new LowSync(adapter);

db.read();
db.data ||= { users: {}, codex: {}, vault: { balance: 1000 } };
db.write();

module.exports = db;