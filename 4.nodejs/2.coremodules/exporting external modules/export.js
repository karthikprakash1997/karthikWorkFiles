var Person = require('./lib/person')

var Karthik = new Person('karthik');
var sakthi = new Person('sakthi')

Karthik.on('speak',function(said){
    console.log(`${this.name} : ${said} `);
    
})
Karthik.emit('speak','welcome to node js');

sakthi.on('speak',function(said){
    console.log(`${this.name} : ${said} `);
    
})
sakthi.emit('speak','welcome to 10th std');