var jOne = {};
var jTwo = require("./two");
var jObj = {
    "name": "Andrei-Cristian Ene",
    "age": 21
};

jOne.fnObjectOne = function() {
    console.log(jTwo.fnObjectTwo(jObj));
    return jTwo.fnObjectTwo(jObj);
}

module.exports = jOne;


jOne.fnObjectOne();


