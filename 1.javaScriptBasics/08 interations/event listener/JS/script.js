const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function rev(e)

{
    e.preventDefault();     
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}
function reveal()
{
    console.log("kp");
}

 
CTA.addEventListener("click", rev, false);
CTA.addEventListener("click", reveal ,false);
