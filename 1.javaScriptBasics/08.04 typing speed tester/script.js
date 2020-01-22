const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0];
// Add leading zero to numbers 9 or below (purely for aesthetics):

function leadingZero(tim)
{
    if(tim<=9)
    {
        var tim = "0" + tim;
    }
    return tim;
 
}

// Run a standard minute/second/hundredths timer:
function runTimer()
{
    var currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]) ;
    timer[3]++;
    theTimer.innerHTML = currentTime;
    
    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
     
}

// Match the text entered with the provided text on the page:
function spellCheck()
{
    let textEntered  = testArea.value;
    console.log(textEntered);
    
}

// Start the timer:
function Start()
{
    let textEnteredLength  = testArea.value.length;
    console.log(textEnteredLength);
    if (textEnteredLength === 0)
    {
        setInterval(runTimer,10);
    }
}

// Reset everything:
function reset()
{
    console.log("button pressed");
}


// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress",Start,false);
testArea.addEventListener("keyup",spellCheck,false);
resetButton.addEventListener("click",reset,false);