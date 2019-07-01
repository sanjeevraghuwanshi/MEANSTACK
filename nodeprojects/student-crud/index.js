/*jshint esversion: 6 */
// FileName : index.js
//Import express js
let express = require('express');
let cors = require('cors');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
//Initialize the app
let app = express();

app.use(cors());

//Import routes
let apiRoutes = require('./api-routes');

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
// mongoose.connect('mongodb://localhost/studentcrud');
mongoose.connect('mongodb://localhost/gst');

var db = mongoose.connection;

//Setup server port
// eslint-disable-next-line no-undef
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello world with express js'));
// Use Api routes in the App
app.use('/api', apiRoutes);

// Launch app to listen to specified port
app.listen(port, () => {
    console.log('Running resthub on port :', port);
});