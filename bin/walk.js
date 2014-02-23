var fs = require('fs'),
		readdir = fs.readdirSync,
		read = fs.readFileSync,
		marked = require('marked');

marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

module.exports = function(dir) {
	var re = /\S\w.md/,
			slides = '';

	readdir(dir).forEach(function(name, idx) {
		if(re.test(name)) {
			var file = read(name, {
				encoding: 'utf-8'
			});
			slides += '<section class="slide" data-slide="' + (idx + 1) + ':' + name + '">' + marked(file) + '</section>';
		}
	});
	return slides;
};

