class car
{
    constructor(wheels,colour,gears){
        this.wheels=wheels;
        this.colour=colour;
        this.gears=gears;
    }
}

class carfactory
{
    carFactory(types)
    {
        switch(types){
            case "honda":  return new car(4,"red",5);
            case "benz":  return new car(4,"green",6);
        }
        
    }
}


const cf = new carfactory();

const abstractFactory = (type,model) => 
{
   switch(type)
   {
       case "car":return cf.carFactory(model);
    
       
   }

}
var a = abstractFactory("car","benz");
console.log(a);

let carMixin=
{
    revEngine()
    {
        console.log( 'vroom vroom');
        
    }
}
Object.assign(car.prototype,carMixin)
a.revEngine();
