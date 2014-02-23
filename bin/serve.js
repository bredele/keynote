/**
 * Module dependencies.
 */

var express = require('express');
var app = module.exports = express();


// middleware

app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.errorHandler());


module.exports = function(dirname, port) {
	app.use(express.static(dirname));
	app.listen(port || 8000);
};