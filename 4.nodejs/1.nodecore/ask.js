var quest=[
    'your name?',
    'your address?',
    'your age?'
];
var answers =[];

function ask(i)
{

   process.stdout.write(`\n\n${quest[i]} >\n\n`);

}
ask(0);

process.stdin.on('data',function(data){
     
    answers.push(data);
    if(answers.length<quest.length){
        ask(answers.length)
    }else{
        
        process.exit()
    }

    //process.stdout.write(`\n\n${data}`)
})

process.on('exit',function()
{
    process.stdout.write(`\n\n`)
    process.stdout.write(`${answers[0]}`)
})