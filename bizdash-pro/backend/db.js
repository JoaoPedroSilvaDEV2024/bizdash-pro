const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "bizdash",
  password: "2445",
  port: 5432,
});

module.exports = pool;