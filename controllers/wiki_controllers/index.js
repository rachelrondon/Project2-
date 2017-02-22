const router = require("express").Router();

const controller = require('./controller');
// The user is initially directed to the index page //

router.get('/:id/edit', controller.edit);
router.get('/', controller.index);
router.get('/new', controller.new);
router.get('/:category/show', controller.category);
router.get('/:search/show', controller.search)

router.post('/', controller.create);
router.put('/:id', controller.update);
// I added this in to keep track of the adds //
router.put('/', controller.like);
router.delete('/:id', controller.destroy);

// router.put('/:id/like', controller.like);

// router.get('/:id', controller.show);


// router.get('/show', controller.show);

// When the user puts in the URL wiki/new they are directed to the new page //
// When the user presses the edit button they will be directed to the edit page //
// Once a new post is created the user is re-directed to the index page//

module.exports = router;
