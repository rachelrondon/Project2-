const pgp = require('pg-promise')();

const db = pgp ({
  host: "localhost",
  port: 5432,
  database: "wiki_website"
});

module.exports = db;
