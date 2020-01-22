var date = new Date();
document.body.innerHTML = "</h1> the date is" + date + "</h1>" ;

var a = "1"
var b = "c"
var c = a+b;
console.log(c);

//finding a length of a string
var pens = ["red","greeen",5,3];
console.log("lenght of the string is ", pens.length); 

// copying a string
var newPens = pens.slice();
console.log("New Pens" , newPens);

//reversing a String
newPens.reverse;
console.log("New Pens" , newPens);

//remove first element of an array
newPens.shift();
console.log(newPens);

//add elemens to the start of an array
newPens.unshift(22,3)
console.log(newPens);

//adding elements to the end of the string
newPens.push(5,55);
console.log(newPens);

//remove element at the end of the string 
newPens.pop();
console.log(newPens);

//removing elements at the middle
newPens.splice(2,2);
console.log(newPens);

//find an  element in the string
var found = newPens.indexOf(5,0)
console.log("found a match at" , found);

//read the contents of the array without the string
var arrayValue = newPens.join("-");
console.log(arrayValue);