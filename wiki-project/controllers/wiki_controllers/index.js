const router = require("express").Router();


const controller = require('./controller');
// The user is initially directed to the index page //
router.get('/', controller.index);
router.get('/new', controller.new);
router.get('/:id/edit', controller.edit);
router.get('/:category/show', controller.category);
// When the user puts in the URL wiki/new they are directed to the new page //
// When the user presses the edit button they will be directed to the edit page //
// Once a new post is created the user is re-directed to the index page//
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
