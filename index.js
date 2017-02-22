const express         = require('express');
const logger          = require('morgan');
const path            = require('path');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');
const timestamp       = require('time-stamp');
const marked          = require('marked');
console.log(marked('I am using _markdown_.'));

const app = express();

app.use(logger('dev'));

app.use(express.static(
  path.join(__dirname, "public")
));
app.listen(process.env.PORT || 3000);

app.set('view engine', 'ejs');

app.set('views', './views');

app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('_method'));

app.use(require('./resources'));
