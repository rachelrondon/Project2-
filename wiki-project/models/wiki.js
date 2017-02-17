const db = require('../config/db');

let Wiki = {};

// Wiki.findAll = () => {
//   return db.manyOrNone(`SELECT * FROM wiki`);
//
// };

Wiki.findAll = () => {
  return db.query("SELECT * FROM wiki");
}

Wiki.save = (wiki) => {
  return db.query (
    `INSERT INTO wiki
    (title, content, category)
    VALUES
    ($1, $2, $3)`,
    [wiki.title, wiki.content, wiki.category]
  );
};


module.exports = Wiki;
