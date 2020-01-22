var fs = require('fs');

//reading files synchonously
/*var files = fs.readdirSync('./lib');

console.log(files);*/

//reading files asycnhronously

fs.readdir('./lib',function(err,files){

    if(err){
        throw err;
    }else{

        console.log(files);
        
    }
})

console.log('reaidngFiles');
