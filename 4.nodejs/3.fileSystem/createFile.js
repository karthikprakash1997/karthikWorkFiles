var fs = require('fs');

var md = 
    `sample markdown title
    
    samle markdown filename
    
    * point
    * point`;

fs.writeFile('sample.md',md.trim(),function(err){
    if(err){
        throw err; 
    }
})

