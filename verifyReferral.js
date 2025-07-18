require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

(async () => {
  const referrals = await pool.query(`SELECT * FROM Referrals`);
  const rewards = await pool.query(`SELECT * FROM ReferralRewards`);
  const users = await pool.query(`SELECT id, credits FROM Users`);

  console.log('Referrals:', referrals.rows);
  console.log('ReferralRewards:', rewards.rows);
  console.log('Users:', users.rows);
  await pool.end();
})();
