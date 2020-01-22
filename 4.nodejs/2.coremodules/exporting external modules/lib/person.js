
var eventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name){
    this.name=name;
}

util.inherits(Person,eventEmitter);

module.exports = Person;