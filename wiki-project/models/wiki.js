const db = require('../config/db');

let Wiki = {};

// Wiki.findAll = () => {
//   return db.manyOrNone(`SELECT * FROM wiki`);
//
// };

Wiki.findAll = () => {
  return db.manyOrNone(`SELECT * FROM wiki`);
}

//for the edit function//
// Wiki.findById = (id) => {
//   return db.one(`
//     SELECT * FROM wiki
//     WHERE id = $1`, [id]
//   );
// }
Wiki.save = (wiki) => {
  return db.query (
    `INSERT INTO wiki
    (title, content, category)
    VALUES
    ($1, $2, $3)`,
    [wiki.title, wiki.content, wiki.category]
  );
};

Wiki.update = (wiki, id) => {
  return db.none(`
    UPDATE wiki
    SET
      title= $1,
      content = $2,
      category = $3
    WHERE id = $4`,
    [wiki.title, wiki.content, wiki.category]
  );
}


module.exports = Wiki;
