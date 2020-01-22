var fs = require('fs');

//sh0w content syncronously
var contents = fs.readFileSync('./lib/sayings.md', 'UTF-8')

console.log(contents);

//show contetns asynhchronously

fs.readFileSync('./lib/sayings.md', 'UTF-8',function(err,contetns){

    if (err){
        throw err;
    }else{
        console.log(contents);
        
    }
})

console.log('reading Contents of the file ');
