var jTwo = {};

var jThree = require("./three");

jTwo.fnObjectTwo = function(jObject) {
	var name = jObject.name;
	var jObj = jThree.fnObjectThree(name);
	return jObj.name;    
}

module.exports = jTwo;
