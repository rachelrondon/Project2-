const db = require('../config/db');

let Wiki = {};

Wiki.findByCategory = (category) => {
    return db.manyOrNone(`
      SELECT *
      FROM wiki
      WHERE category = $1`, [category]
    );
   }

// For the search bar, I am only pullling information from the title of each article.
// I made the req.query.search dynamic under the controllers page instead of in sql.//
Wiki.search = (data) => {
 return db.manyOrNone(`
   SELECT *
   FROM wiki
   WHERE title LIKE $1
   `, [data])
 }

Wiki.findAll = () => {
  return db.manyOrNone(`SELECT * FROM wiki`);
}

Wiki.findById = (id) => {
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

module.exports = Wiki;
