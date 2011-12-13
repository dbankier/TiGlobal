/*global require,exports*/
var myapp = require("Global");

exports.test = function() {
	Ti.API.info("One var1: " + myapp.var1);
	myapp.var2 = "Hello World 2";
	Ti.API.info("One var2: " + myapp.var2);
};
