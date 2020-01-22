var fs = require('fs');

try{fs.unlinkSync('./lib/config.js')
}catch(error){
    console.log(error);
    
}
fs.unlink('./notes.md',function(err){
    if(err){
        throw err
    }else{
        console.log('notes is deleted');
        
    }
})