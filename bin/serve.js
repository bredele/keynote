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

app.get('/:page?', function(req, res, next) {
	if(req.ip === '127.0.0.1') {
		console.log('master');
	}
	next();
});