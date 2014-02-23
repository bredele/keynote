var Stack = require('stack');

//init

stack = new Stack(document.body);
var div = document.createElement('div');
div.insertAdjacentHTML('beforeend', document.getElementById('keynote-template').innerHTML);

var nodes = div.children;
console.log(nodes);
for(var l = nodes.length; l--;) {
	stack.add(l, nodes[l]);
}
function show() {
	var hash = window.location.hash.substring(2);
	// if(/^#\/[0-9]*$/.test(hash)) {

	// }
	
	stack.show(stack.directory.indexOf(hash) ? Number(hash) : 0);
}

show();

window.addEventListener('hashchange', function() {
	show();
});