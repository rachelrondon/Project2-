const router = require("express").Router();

const controller = require('./controller');

router.get('/', controller.index);
router.get('/new', controller.new);
router.post('/show', controller.create);

module.exports = router;
