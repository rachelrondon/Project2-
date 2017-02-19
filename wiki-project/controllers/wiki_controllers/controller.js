
const Wiki = require('../../models/wiki');

let controller = {};

controller.index = (req, res) => {
  // res.render('/wiki/index.ejs')
  console.log('index rendering with params', req.params)
  Wiki
  .findAll()
  .then((data) => {
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
  Wiki
  .findByCategory(req.params.category)
  .then (() => {
    if (req.query.wiki.category.food) {
      res.redirect('/wiki/food/show')
    }  {
    res.redirect('/wiki')
  }
})
.catch(err => console.log('ERROR:', err));
}
  // .findByCategory(req.query.wiki.category)
    // .then((data) => {
    //   console.log('*******', data)
    //   res.redirect('/wiki/show'), {
    //     wiki: data
//   }
//   .catch(err => console.log('ERROR', err));
//   });
// }

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
