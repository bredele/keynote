var fs = require('fs'),
		marked = require('marked');

module.exports = walk;

function walk() {
	var re = /\S\w.md/;
	fs.readdir(__dirname, function(err, files) {
		if (err) throw err;
		files.forEach(function(file) {
			var idx = 1;
			if(re.test(file)) {
				fs.readFile(__dirname + '/' + file, 'utf-8', function(err, text) {
					if (err) throw err;
					console.log(marked('<section class="slide" data-slide="' + idx + ':' + file + '">' + text + '</section>'));
				});
			}
		});
	});
};

