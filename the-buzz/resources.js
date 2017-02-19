const express = require('express');
const router = express.Router();

router.use('/buzz', require('./controllers/thebuzz'));

module.exports = router;
