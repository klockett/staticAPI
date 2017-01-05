var express =  require('express');
var body_parser = require('body-parser');
var app = express();
var shortener = require('./shortener.js');
//Config

var output = shortener.stringGen(6);
var port = 3000;

app.use('/api', require('../routes/api.js')(express));

var server = app.listen(port, function(){
  console.log('Server Active on', port);

});

module.exports = server;
