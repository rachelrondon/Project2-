const repl = require('repl');

const replServer = repl.start({
  promp:"Buzz App >"
});

const Buzz = require('./buzz');

replServer.context.Buzz = Buzz;
