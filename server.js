var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("This is just a message");
});

var port = 2500;

var jOne = require("./one");
var jTwo = require("./two");
var jThree = require("./three");

app.listen(port, function() {
	console.log("server is listening on port: " + port);
});
