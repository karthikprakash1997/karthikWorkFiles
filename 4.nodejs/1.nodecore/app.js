function grab(flag){
    var index = process.argv.indexOf(flag);
    return (index === -1) ? null:process.argv[index+1];
}
var greetings=grab('--greetings');
var user = grab('--user');
if(!user || !greetings){
    console.log('you blw it');   
}
else{
    console.log(`hello ${user} , ${greetings}`);
    
}