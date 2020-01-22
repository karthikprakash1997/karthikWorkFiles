var fs = require('fs');

if (fs.existsSync('library')){
    console.log('directory exists');//check ifthe directory already exists
}else{

    fs.mkdir('library',function(err){
        if(err){
            console.log(err);
        }else{
            console.log('directory created');
            
        }
    })

}

