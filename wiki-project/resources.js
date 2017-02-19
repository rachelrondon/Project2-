const express   = require('express');
const router = express.Router();
// const app       = express();


router.use('/wiki', require('./controllers/wiki_controllers'))
// router.use('/new', require('./controllers/wiki_controllers'))

module.exports = router;
