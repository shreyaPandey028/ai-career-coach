// test-db.js
import pg from "pg";
const client = new pg.Client({ connectionString: process.env.DATABASE_URL });
(async () => {
  try {
    await client.connect();
    console.log("Connected!");
    const r = await client.query("SELECT now()");
    console.log(r.rows);
    await client.end();
  } catch (e) {
    console.error("ERROR:", e.message);
    process.exit(1);
  }
})();
