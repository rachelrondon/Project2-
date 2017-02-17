const Wiki = require('../../models/wiki');

let controller = {};

controller.index = (req, res) => {
  Wiki
  .findAll()
  .then((data) => {
    console.log(data);
    res.render('wiki/index.ejs', {
      wiki: data
    })
    .catch(err => console.log('ERROR', err));
  });
};

controller.new = (req, res) => {
  res.render('wiki/new.ejs');
  // this tells the computer to look into this folder //
}

controller.create = (req, res) => {
  Wiki
  .save(req.body.wiki)
  .then(() => res.redirect('/wiki'))
  // this tells the computer to go tho this URL/
  .catch(err => console.log('ERROR', err));
}

controller.update = (req, res) => {
  Wiki
  .update(req.body.wiki, req.params.id)
  .then( () => res.redirect('/wiki'))
  .catch(err => console.log('ERROR:', err));
}

module.exports = controller;
