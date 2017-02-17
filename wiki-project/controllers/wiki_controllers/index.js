const router = require('express').Router();

const controller = require('./controller');

router.get('./:id/edit', controller.edit);

router.put('./:id/like', controller.like);

router.get('/new', conroller.new);

router.get('/:id', controller.show);

router.put('/:id', controller.update);

router.delete('/:id', controller.destroy);

router.get('/', controller.index);

router.post('/', controller.create);

module.exports = router;
