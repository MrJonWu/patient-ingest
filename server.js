var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/src'));
require('./server/routes.js')(app, express);

app.listen(port, function() {
  console.log('Server is listening on ' + port);
});