//without inheritence

/*var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('customEvent',function(message,status){
    console.log(`${status} : ${message} `);
    
})

emitter.emit('customEvent','be good',200);*/

var eventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name){
    this.name=name;
}

util.inherits(Person,eventEmitter);

var Karthik = new Person('karthik');

Karthik.on('speak',function(said){
    console.log(`${this.name} : ${said} `);
    
})
Karthik.emit('speak','welcome to node js');