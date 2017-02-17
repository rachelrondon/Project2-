const express         = require('express');
const logger          = require('morgan');
const path            = require('path');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');
// const SimpleSearch    = require('simplesearch');
// const timestamp       = require('time-stamp');

const app = express();

app.listen(process.env.PORT || 3000);

app.set('view engine', 'ejs');

app.set('views', './views');

// app.listen(PORT, () => {console.log('Listening on port', PORT);});

app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('_method'));

// app.use(timestamp());

app.use(require('./resources'));
