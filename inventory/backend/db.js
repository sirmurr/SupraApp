const { Pool } = require("pg");
const pool = new Pool({
  host: "db",
  post: 5432,
  user: "postgres",
  password: "docker",
  database: "mydb",
});

module.exports = pool;
