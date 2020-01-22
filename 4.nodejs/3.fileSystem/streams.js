var fs = require('fs');

/*fs.readFile('./chat.log','UTF-8',function (err,chatlog) {
    if(err){
        throw err;
    }
    else{
        console.log(`read the file ${chatlog.length}`);
        
    }
    
})*/

var stream = fs.createReadStream('./chat.log');
var data = '';

stream.once('data', function()
{
    console.log(`\n\n\n`);
    console.log('started reading files');
    console.log(`\n\n\n`); 
})

stream.on('data',function(chunk)
{
    process.stdout.write(`  chunk: ${chunk.length}|`);
    data+=chunk;
})

stream.on('end',function () {

    
    console.log(`\n\n\n`);
    console.log(`finished reading files ${data.length}`);
    console.log(`\n\n\n`); 
    
})
