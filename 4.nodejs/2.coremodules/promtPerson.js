var readline = require('readline');
var realPerson ={
    name:'',
    saying:[]
};

var rl = readline.createInterface(process.stdout,process.stdin)

rl.question('what is your name?',function(answer){

   realPerson.name=answer;

   rl.setPrompt(`what does ${realPerson.name} say`);
   
   rl.prompt();

   rl.on('line',function(saying){

    realPerson.saying.push(saying.trim())

     if (saying.toLowerCase() ==='exit')  {
         rl.close()
     }
     else{
      rl.setPrompt(`what else does ${realPerson.name} say?('exit' to leave)`)
      rl.prompt()
     } 
   })
})
rl.on('close' ,function(){
    console.log('%s is a realperson that says %j',realPerson.name,realPerson.saying);
    process.exit();
    
})