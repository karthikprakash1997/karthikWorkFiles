class car
{
    constructor(wheels,colour,gears){
        this.wheels=wheels;
        this.colour=colour;
        this.gears=gears;
    }
}

class factory
{
    carFactory(types)
    {
        switch(types){
            case "honda":  return new car(4,"red",5);
            case "benz":  return new car(4,"green",6);
        }
        
    }
}
var m = new factory();
let a = m.carFactory('benz');
console.log(a);


