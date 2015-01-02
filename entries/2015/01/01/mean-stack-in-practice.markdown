#MEAN Stack in practice

This article will look into best practices for laying out and organizing a Node and Angular (MEAN stack) app.

In the process of extending our Node and Angular To-Do App with authorization, I ran into a problem: the tutorial was going to be huge. In our first tutorial, we placed everything (variables, configuration, models, routes, and more) in our **server.js** file. While this is fine for demonstration purposes and small Node applications, it wasn’t going to work with how far we wanted to take this To-Do app.

##Application Structure

The structure of the files in our application is very important. It can help us expand and grow the app as we will inevitably get more and more popular (hopefully), or it could make coming back to the code an absolute nightmare.

There are so many different ways to lay out a MEAN (MongoDB, Express, Angular, Node) app, and the tutorials online show that. This tries to lean close to best practices and the best ideas taken from many of those MEAN stack tutorials.

In this article, we’ll look at how we can separate the core functions of our app into a sensible and sane file structure. Let’s begin.

```javascript
// set up ======================================================================
var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var port = process.env.PORT || 8080;

// configuration ===============================================================

mongoose.connect('mongodb://node:node@mongo.onmodulus.net:27017/uwO3mypu');     // connect to mongoDB database on modulus.io

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// define model ================================================================
var Todo = mongoose.model('Todo', {
    text : String,
    done : Boolean
});

// routes ======================================================================

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', function(req, res) {
        ...
    });

    // create todo and send back all todos after creation
    app.post('/api/todos', function(req, res) {
        ...
    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function(req, res) {
        ...
    });

    // application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
```

**Why do this?** I know it seems a little useless since it’s only the one configuration setting. It will pay off in the future though when we have multiple settings across multiple files (auth, database, application, environment).


Read full article in [scotch.io](https://scotch.io/tutorials/node-and-angular-to-do-app-application-organization-and-structure)