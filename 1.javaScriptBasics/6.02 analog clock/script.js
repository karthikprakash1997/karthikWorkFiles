const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock()
{


    var secPos;
    var minPos;
    var hrPos;
    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    secPos = sec*360/60;
    minPos = ((min*360/60)+(sec*360/60)/60);
    hrPos = ((hr*360/12)+(min*360/60)/12);

    
    
    
    HOURHAND.style.transform = "rotate(" + hrPos + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPos + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPos + "deg)";
    
    
}

var interval = setInterval(runTheClock,1000);