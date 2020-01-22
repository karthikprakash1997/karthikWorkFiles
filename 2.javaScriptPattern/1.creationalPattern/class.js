//EXAMPLE FOR CLASS
class car
{
    constructor(wheels,colour,gears){
        this.wheels=wheels;
        this.colour=colour;
        this.gears=gears;
    }
}
var benz = new car(4,"red",6);
console.log(benz);

let bmw =new car(2,"white",3);
console.log(bmw);

//inheritance or constructor pattern java script
class SUV extends car
{
    constructor(wheels,colour,gears,weight)
    {
         super(wheels,colour,gears)
         this.weight = weight;
    }
}
var al = new SUV (4,"GREEN",5,5);
console.log(al);

//example for singleton

