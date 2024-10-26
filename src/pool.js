require("dotenv").config();

const pg = require("pg");

module.exports = new pg.Pool({
  user: "postgres",
  password: "Aref@1998",
  host: "localhost",
  database: "abuodehstore",
  port: 5432,
});
