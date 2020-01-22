import  React from 'react';
import classes from './Burger.css';
import BurgerIngrediants from './BurgerIngrediants/BurgerIngrediants';

const burger = (props) =>
{   let transformedIngrediants =Object.keys(props.ingrediants)
        .map(igKey => {
        return [...Array(props.ingrediants[igKey])].map((_,i) =>
        {return <BurgerIngrediants key ={igKey + i}  type ={igKey}/>})
    })
        .reduce(( arr,el)=> {
            return arr.concat(el)
        }, []);
    console.log(transformedIngrediants);

    if(transformedIngrediants.length  === 0)
    {
       transformedIngrediants = <p className ={classes.BurgerText}>Please ADD Something.</p> 
    }

    return(
         <div className ={classes.Burger}>
         <BurgerIngrediants type ="bread-top"></BurgerIngrediants>
            {transformedIngrediants} 
         <BurgerIngrediants type ="bread-bottom"></BurgerIngrediants>                 
             
         </div>);

}
export default burger;