var Stack = require('stack');

//init

stack = new Stack(document.querySelector('.kn-slides'));
var div = document.createElement('div');
div.insertAdjacentHTML('beforeend', document.getElementById('kn-template').innerHTML);

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

//crap

document.querySelector('.icon-comment').addEventListener('click', function() {
	document.body.classList.toggle('slide');
});