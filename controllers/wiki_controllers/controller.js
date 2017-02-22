const Wiki          = require('../../models/wiki');
let controller      = {};
const timestamp     = require('time-stamp');

// On the index page, a findAll() called which renders all of the data from the database //
controller.index = (req, res) => {
  Wiki
  .findAll()
  .then((data) => {
    res.render('wiki/index.ejs', {
      wiki: data
    })
    .catch(err => console.log('ERROR', err));
  });
};

// Here the wiki/new page is rendered. //
controller.new = (req, res) => {
  res.render('wiki/new.ejs');
}

// This is how each post is sorted by category.
// I modeled this after the controller.id search //
// Here we are giving the server the parameter of the category that is chosen through the dropdown //
controller.category = (req, res) => {
  Wiki
  .findByCategory(req.params.category)
  .then((data => {
    res.render('wiki/show.ejs', {
      wiki: data
    })
    .catch(err => console.log('ERROR:', err));
  }))
}

// For the search, I am pulling information from the search bar and applying a re.query.search.
// This then turns this information into text that is referenced in the database.
// search -> req.query.search -> text
controller.search = (req, res) => {
  Wiki
  .search(`%${req.query.search}%`)
  .then((data) =>{
    res.render('wiki/show.ejs', {
      wiki: data
    })
    .catch(err => console.log('ERROR:', err));
  })
}

// I used new Date() to get the date/time for each post //
controller.create = (req, res) => {
  let date_created = new Date()
  date_created.getHours();
  date_created.getMinutes();
  console.log(date_created);

  Wiki
  .save(req.body.wiki, date_created)
  .then(() => res.redirect('/wiki'))
// Redirect - tells the computer to go to this URL
  .catch(err => console.log('ERROR', err));
}

// This is how each post is edited //
controller.edit = (req, res) => {

  Wiki
  .findById(req.params.id)
  .then((data => {
    res.render('wiki/edit.ejs', {
      wiki: data
    })
    .catch(err => console.log('ERROR:', err));
  }))
}
controller.update = (req, res) => {
  Wiki
  .update(req.body.wiki, req.params.id)
  .then( () => res.redirect('/wiki'))
  .catch(err => console.log('ERROR:', err));
}

// This is how each post is deleted //
controller.destroy = (req, res) => {
  Wiki
  .destroy(req.params.id)
  .then(() => {
    res.redirect('/wiki');
  })
  .catch((err) => {
    res
    .status(400)
    .send(err);
  });
}

module.exports = controller;
