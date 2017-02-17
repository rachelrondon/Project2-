const Wiki = require('../../models/wiki');

let controller = {};

controller.index = (req, res) => {
  Wiki
  .findAll()
  .then((wiki_data) => {
    res.render('wiki/index.ejs', {
      data: wiki_data
    })
  });
}

controller.new = (req, res) => {
  res.render('wiki/new.ejs');
}

controller.create = (req, res) => {
  Wiki
  .save(req.body.wiki)
  .then(() => res.redirect('wiki/show.ejs'))
  .catch(err => console.log('ERROR', err));
}

// controller.show = (req, res) => {
//
// }

module.exports = controller;
