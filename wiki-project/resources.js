const router = require('express').Router();

router.use('/wiki', require('./controllers/wiki_controllers'))

module.exports = router;
