var startTime=0;
var waitTime=500;
var percentage=0;


console.log('wait for it ');

function waitTimePercentage(p)
{
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting for ${p}`)
}

var interval=setInterval(function(){

    startTime+=waitTime;
    waitTimePercentage(startTime*100/3000)
    console.log();
    

},waitTime)



setTimeout(function(){
  clearInterval(interval);
  waitTimePercentage(100)
  console.log('\ndone');

},3000)
