#!/usr/bin/env node

var Builder = require('component-builder'),
		resolve = require('path').resolve,
    fs = require('fs'),
    write = fs.writeFileSync;


/**
 * Component builder.
 */

console.log(resolve(__dirname, '..'));
var builder = new Builder(resolve(__dirname, '..'));
builder.build(function(err, res){
  if (err) throw err;
  var js = res.require + res.js;
  console.log(res.js);
  write('bin/basic/js/keynote.js', js);
  //write('public/skeleton.css', res.css);
});
