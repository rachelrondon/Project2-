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
// this tells the computer to look into this folder
}

controller.category = (req, res) => {
  console.log(req.params.category, '*******************req.params.category');
  Wiki
  .findByCategory(req.params.category)
    .then((data) => {
      console.log(data, '*******************data')
      res.redirect('/wiki'), {
        wiki:data[0]
    };
  })
  .catch((err) => {
    res
    .status(400)
    .send(err);
  });
}

controller.create = (req, res) => {
  Wiki
  .save(req.body.wiki)
  .then(() => res.redirect('/wiki'))
// this tells the computer to go to this URL
  .catch(err => console.log('ERROR', err));
}

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
