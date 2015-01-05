var express = require('express'),
  hbs = require('hbs'),
  app = express(),
  router = require('./router');

app.use(express.static('assets'));
app.set('view engine', 'html');
app.engine('html', hbs.__express);

hbs.registerPartials('./views/partials');

app.get('/', router.index);
app.get('/:entryUri', router.entry);

module.exports = app;
