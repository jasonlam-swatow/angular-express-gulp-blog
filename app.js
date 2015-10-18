
/**
 * Module dependencies.
 */

var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    errorHander = require('errorHandler'),
    morgan = require('morgan'),
    http = require('http'),
    path = require('path'),
    routes = require('./routes'),
    api = require('./routes/api');

var app = module.exports = express();

/**
 * Configuration
 */

var port = process.env.PORT || 8080;

app.set('port', process.env.PORT || 3000);  // set listened port
app.set('views', __dirname + '/views');     // set static files location
app.set('view engine', 'jade');             // set view engine as jade
app.use(morgan('dev'));                     // set up morgan to log requests
// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
// simulate DELETE/PUT verbs
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
    app.use(errorHander());
}

// production only
if (env === 'production') {
    app.use(errorHander());
}

/**
 * Routes
 */

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON APIs

app.get('/api/posts', api.posts);

app.get('/api/post/:id', api.post);
app.post('/api/post', api.addPost);
app.put('/api/post/:id', api.editPost);
app.delete('/api/post/:id', api.deletePost);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

/**
 * Start Server
 */
app.listen(port);
console.log('Magic happens on port ' + port);
// expose app to make it available
exports = module.exports = app;
