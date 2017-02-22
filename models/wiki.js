const db = require('../config/db');

let Wiki = {};

Wiki.findByCategory = (category) => {
    return db.manyOrNone(`
      SELECT *
      FROM wiki
      WHERE category = $1`, [category]
    );
   }

Wiki.search = (text) => {
 console.log('ubsude tge nidek', text);
 return db.manyOrNone(`
   SELECT *
   FROM wiki
   WHERE title LIKE $1
   `, [text])
 }

Wiki.findAll = () => {
  return db.manyOrNone(`SELECT * FROM wiki`);
}

//for the edit function//
Wiki.findById = (id) => {
  // console.log('*************************model', id)
  return db.one(`
    SELECT * FROM wiki
    WHERE id = $1`, [id]
  );
}

Wiki.save = (wiki, date_created) => {
  return db.query (
    `INSERT INTO wiki
    (title, content, category, date_created)
    VALUES
    ($1, $2, $3, $4)`,
    [wiki.title, wiki.content, wiki.category, date_created]
  );
};

// This is for the edit page.
// An article will be selected by their id
// We will need to provide the specific information that will need to be updated //

Wiki.update = (wiki, id) => {
  return db.query(
    `UPDATE wiki SET
    title = $1,
    content = $2,
    category = $3,
    date_updated = $4
    WHERE id = $5`,
    [wiki.title,
    wiki.content,
    wiki.category,
    wiki.date_updated, id]
  );
}

Wiki.destroy = (id) => {
  return db.query('DELETE FROM wiki WHERE id = $1', [id]);
}

// Wiki.like = (id) => {
//   return db.none(`
//     UPDATE wiki
//     SET likes = likes + 1
//     WHERE id = $1`,
//     [id]
//   );
// }


module.exports = Wiki;
