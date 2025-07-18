const pool = require('./db');

async function createReferralsTable() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS referrals (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        referrer_id UUID NOT NULL,
        referred_id UUID NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);
    console.log('✅ referrals table created (or already existed).');
  } catch (error) {
    console.error('❌ Failed to create referrals table:', error);
  } finally {
    process.exit();
  }
}

createReferralsTable();
