#!/usr/bin/env node

var Builder = require('component-builder'),
		minify = require('minify'),
    write = require('fs').writeFileSync;


/**
 * Component builder.
 */

var builder = new Builder('.');
builder.build(function(err, res){
  if (err) throw err;
  var js = res.require + res.js;
  js += ';require("slides")';
  write('bin/basic/js/keynote.js', js); //minify.js(js)
  write('bin/basic/css/keynote.css', res.css);
});
