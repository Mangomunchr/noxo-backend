const db = require('./db');
async function markOldJobsComplete() {
  const result = await db.query(
    "UPDATE jobs SET status = 'complete' WHERE status = 'queued' AND created_at < NOW() - INTERVAL '10 seconds' RETURNING id"
  );
  if (result.rowCount > 0) console.log(`[WORKER] Completed ${result.rowCount} jobs`);
}
function startJobWorker() {
  setInterval(markOldJobsComplete, 5000);
}
module.exports = { startJobWorker };