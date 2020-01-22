const FEATURED= document.querySelector(".featured_image img");
const B = FEATURED.querySelector(" img");

var alttext = FEATURED.getAttribute("alt");

var captionElement = document.createElement("fig_caption");

var createText = document.createTextNode(alttext);

captionElement.append(alttext);
FEATURED.appendChild(captionElement);
B.setAttribute("alt", "");

console.log(captionElement);
