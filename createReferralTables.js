require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

(async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS Referrals (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      referrerUserId UUID NOT NULL,
      referredUserId UUID NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending',
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS ReferralRewards (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      referralId UUID NOT NULL,
      rewardType TEXT NOT NULL,
      amount INTEGER NOT NULL,
      grantedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log('✅ Referrals and ReferralRewards tables created.');
  await pool.end();
})();
