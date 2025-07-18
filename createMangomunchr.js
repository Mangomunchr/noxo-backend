require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

(async () => {
  const userId = '33333333-3333-3333-3333-333333333333';
  await pool.query(`
    INSERT INTO Users (id, email, password, credits, role)
    VALUES ($1, 'mangomunchr@gmail.com', 'demo', 0, 'NodeMonk')
    ON CONFLICT (id) DO NOTHING;
  `, [userId]);

  const { rows } = await pool.query(
    `SELECT referralCode FROM Users WHERE id = $1`,
    [userId]
  );

  console.log('🎉 mangomunchr referralCode:', rows[0].referralcode);
  await pool.end();
})();
