let express = require('express');
let log = require('morgan')('dev');
let bodyParser = require('body-parser');

let PORT = require('./config/properties').PORT;
let DB = require('./config/database');

let gstRoutes = require('./api/gstBuiness/gst.routes');
let jumpRoutes = require('./api/jumpStarter/jump.routes');

let app = express();

let bodyParserJson = bodyParser.json();
let bodyParserUrlEncoded = bodyParser.urlencoded({
    extended: true
});

let router = express.Router();

DB();

app.use(log);
app.use(bodyParserJson);
app.use(bodyParserUrlEncoded);

// Error handling
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
    next();
});

app.use('/api', router);
// gstRoutes(router);
jumpRoutes(router);

app.listen(PORT, (req, res) => {
    console.log(`Server is running on port : ${PORT}`);
});