var exec = require('child_process').exec;

exec('ls',function(error,stdout){

    if(error){
        throw error;
    }

    console.log("listing finished");
    console.log(stdout);
    
    
})