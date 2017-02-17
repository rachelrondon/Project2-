const pg = require('pg-promise')();

const db = pgp ({
  host: "localhost",
  port: 5432,
  database: "hotel_manager"
});

module.exports = db;
