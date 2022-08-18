const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "users",
  password: "Juvenile0712",
  port: 5432,
});

module.exports = pool;
