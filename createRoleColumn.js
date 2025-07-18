require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

(async () => {
  await pool.query(`
    ALTER TABLE Users ADD COLUMN IF NOT EXISTS role VARCHAR(20) NOT NULL DEFAULT 'Renderling';
  `);
  console.log('✅ role column added to Users (or already existed).');
  await pool.end();
})();
