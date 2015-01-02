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

app.listen(3000);

console.log('Express listening on port 3000 in %s mode', app.settings.env);