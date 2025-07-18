require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

(async () => {
  const jobId = 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa';
  const userId = '33333333-3333-3333-3333-333333333333';

  await pool.query(`
    CREATE TABLE IF NOT EXISTS Jobs (
      id UUID PRIMARY KEY,
      userId UUID NOT NULL,
      status TEXT NOT NULL DEFAULT 'queued',
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await pool.query(`
    INSERT INTO Jobs (id, userId, status) VALUES ($1, $2, 'queued')
    ON CONFLICT (id) DO NOTHING;
  `, [jobId, userId]);

  console.log('🎯 Test job seeded with ID:', jobId);
  await pool.end();
})();
