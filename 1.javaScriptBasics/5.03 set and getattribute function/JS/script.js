const ADE = document.querySelector(".cta a");

if(ADE.hasAttribute("target"))
{
    console.log(ADE.getAttribute("target"));
}
else
{
    ADE.setAttribute("target","_blank");
}


console.log(ADE.attributes);