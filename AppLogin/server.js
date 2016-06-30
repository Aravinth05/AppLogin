// server.js

// set up ========================
var express = require('express');
var app = express();                        // create our app w/ express
var mongoose = require('mongoose');              // mongoose for mongodb
var morgan = require('morgan');                // log requests to the console (express4)
var bodyParser = require('body-parser');         // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var database = require('./config/database');
var port = process.env.PORT || 8888;         // set the port

var path = require('path');



// configuration ===============================================================
mongoose.connect(database.url);     // connect to mongoDB database on modulus.io

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({ 'extended': 'false' }));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json


global.appRoot = path.resolve(__dirname);


// routes ======================================================================
// ROUTES
require('./app/services/customerService.js')(app);

//


// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port : " + port);


