const express         = require('express');
const logger          = require('morgan');
const path            = require('path');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');
const time            = require('express-timestamp');
// const marked          = require('marked');
// const markdownString = '```js\n console.log("hello"); \n```';
// const SimpleSearch    = require('simplesearch');
// const timestamp       = require('time-stamp');

// marked.setOptions({
//   highlight: function (code) {
//     return require('highlight.js').highlightAuto(code).value;
//   }
// });
//
// console.log(marked(markdownString));


// console.log(marked('I am using __markdown__.'));

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

app.use(time.init);

// app.get('/', function (req, res) {
//   var moment = req.timestamp
//   console.log(moment.tz("America/Mexico_City")).format();
// })

app.use(require('./resources'));
