var fs = require('fs');

//fs.renameSync('./lib/project-config.js','./lib/config.js');

fs.rename('./lib/notes.md','./notes.md',function(err){
    if (err){
        throw err;
    }else{
        console.log('nots.md moved succesfully');
        
    }
})//used to move files fro one folder to anther folder