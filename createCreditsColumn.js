require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

(async () => {
  await pool.query(`
    ALTER TABLE Users ADD COLUMN IF NOT EXISTS credits INTEGER NOT NULL DEFAULT 0;
  `);
  console.log('✅ credits column added to Users (or already existed).');
  await pool.end();
})();
