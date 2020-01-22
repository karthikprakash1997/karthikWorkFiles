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

class suv
{
    constructor(wheels,colour,gears)
    {
        this.wheels=wheels;
        this.colour=colour;
        this.gears=gears;
    }
}

class suvfactory
{
    suvFactory(types)
    {
        switch(types)
        {
            case "bolero":  return new suv(4,"red",5);
            case "scorpio":  return new suv(4,"green",6);
        }
        
    }
}

const cf = new carfactory();
const sf = new suvfactory();

const abstractFactory = (type,model) => 
{
   switch(type)
   {
       case "car":return cf.carFactory(model);
       case "suv":return sf.suvFactory(model);
       
   }

}
var a = abstractFactory("suv","bolero");
console.log(a);

