const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function rev(e,current)

{
    e.preventDefault();     
    current.innerHTML == "Book Now!" ? CTA.innerHTML = "ooops!" : CTA.innerHTML = "Book Now!";
    ALERT.classList.toggle("hide");
}


 
CTA.addEventListener("click", function(e){rev(e,this);}, false);
CTA.addEventListener("click", function(){console.log("kp");},false);
