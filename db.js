const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5432/noxo'
});
module.exports = { query: (text, params) => pool.query(text, params) };