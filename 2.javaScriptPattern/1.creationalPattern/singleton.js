var instance = null;


class car1
{
    constructor(wheels,colour,gears){
        if(!instance)
        {
           this.wheels=wheels;
           this.colour=colour;
           this.gears=gears;
           instance=this;
        }
        else 
        {
            return instance;
        }
    }
}
var benz1 = new car1(4,"red",6);
console.log(benz1);

let bmw1 =new car1(2,"white",3);
console.log(bmw1);
