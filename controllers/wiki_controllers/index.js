const router = require("express").Router();

const controller = require('./controller');

// The edit page shows up as wiki/(id)/edit //
router.get('/:id/edit', controller.edit);
// The user is initially routed to the index page //
// The ID is automatically assigned by the database //
router.get('/', controller.index);
// The new show page shows up as wiki/new //
router.get('/new', controller.new);
// The category page shows up as wiki/(category)/show
// The category is defined by the drop down menu
router.get('/:category/show', controller.category);

// I have provided by /search path and would like to work on the way it shows up in the URL.
// It currently shows up as (http://localhost:3000/wiki/search?search=coffee)
// and is re-directed to the show page. I would like to create a clean url.
router.get('/search', controller.search)

router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);

// When the user puts in the URL wiki/new they are directed to the new page //
// When the user presses the edit button they will be directed to the edit page //
// Once a new post is created the user is re-directed to the index page//

module.exports = router;
