/*global require,exports*/
var myapp = require("Global");

exports.test = function() {
	Ti.API.info("Two var2: " + myapp.var2);
	myapp.var3 = "Hello World 3";
	Ti.API.info("Two var3: " + myapp.var3);
};