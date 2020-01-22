var fs =  require('fs');

//fs.renameSync('./assets/logs','./logs'); // to move a directory

//console.log('directory moved');

fs.rmdir('./assets',function(err){
     
    if (err){
        throw err
    }else 
    console.log('direcotry removed');
    
})//we can remove only empty direcotry

// to remove directoy with content

fs.readdirSync('./logs').forEach(function(fileName){

    fs.unlinkSync('./logs/'+fileName)

})

fs.rmdir('./logs',function (error) {
    if(error){
        throw error;
    }else{
        console.log('logs deleted');
        
    }
})