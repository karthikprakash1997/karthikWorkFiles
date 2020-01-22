import  React from 'react';
import classes from './Order.css'
const Orders =(props)=>{

    // to map the ingreidnats in the form of  an array
    const ingrediants=[];
    for (let ingrediantName in props.ingrediants){
        ingrediants.push({
            name: ingrediantName,
            amount:props.ingrediants[ingrediantName]
        })
    }
  
   const ingrediantOutput = ingrediants.map(ig=>{
       return(
        <span key ={ig.name}>{ig.name}  ({ig.amount})</span>
       )
   })
   //console.log(ingrediantOutput);  

    return(
    <div className={classes.Order}>
        <p>Ingredients: {ingrediantOutput}</p>
        <p>Price:<strong>{props.price.toFixed(2)} (in rupees)</strong></p>
    </div>
    )
}
export default Orders