const Wiki          = require('../../models/wiki');
let controller      = {};
const timestamp     = require('time-stamp');

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
  .then((data => {
    res.render('wiki/show.ejs', {
      wiki: data
    })
    .catch(err => console.log('ERROR:', err));
  }))
}

// text = req.query.search // = search bar input // search -> req.query.search -> text
controller.search = (req, res) => {
  console.log('searching', req.query.search)
  Wiki
  .search(`%${req.query.search}%`)
  .then((data) =>{
    console.log(data)
    res.render('wiki/show.ejs', {
      wiki: data
    })
    .catch(err => console.log('ERROR:', err));
  })
}

controller.create = (req, res) => {
  let time = timestamp();
  let date_created = time.split(':').join('-')
  Wiki
  .save(req.body.wiki, date_created)
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

controller.like = (req, res) => {
  Wiki
    .like(req.params.id)
    .then(() => {
      if (req.query.show) {
        res.redirect('/wiki')
      } else {
        res.redirect('/wiki')
      }
  })
    .catch(err => console.log('ERROR:', err));
}


module.exports = controller;
