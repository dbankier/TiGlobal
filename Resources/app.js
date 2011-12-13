/*global require*/
require('require_patch').monkeypatch(this);
var myapp = require("Global");

myapp.var1 = "Hello World 1";
require('One').test();
require('Two').test();

Ti.API.info("App var1: " + myapp.var1);
Ti.API.info("App var2: " + myapp.var2);
Ti.API.info("App var3: " + myapp.var3);
