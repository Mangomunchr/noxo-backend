// createJobsTable.js
require('dotenv').config();
const { Pool } = require('pg');

(async () => {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  try {
    // Enable UUID extension
    await pool.query('CREATE EXTENSION IF NOT EXISTS "pgcrypto";');
    console.log('✅ pgcrypto extension enabled.');

    // Create the Jobs table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS Jobs (
        id UUID PRIMARY KEY,
        userId UUID NOT NULL REFERENCES Users(id),
        status VARCHAR(20) NOT NULL DEFAULT 'pending',
        completedAt TIMESTAMPTZ
      );
    `);
    console.log('✅ Jobs table created (or already existed).');
  } catch (err) {
    console.error('❌ Error creating Jobs table:', err);
  } finally {
    await pool.end();
  }
})();
