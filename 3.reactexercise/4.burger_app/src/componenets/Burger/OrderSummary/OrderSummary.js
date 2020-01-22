import  React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

const orderSummary =(props)=>{
    
    const burgerInrediant = Object.keys(props.ingrediants)
.map(igKey => { 
    return <li key={igKey}><span style ={{textTransform:'capitalize'}}> {igKey}</span>: {props.ingrediants[igKey]}</li>
           
     })
    return (

        
        <Aux> 
            <h3>Your OrderSummary</h3>
            <p>Your delicious Burger has following Ingredianst</p>
            <ul>
               {burgerInrediant}
            </ul>

            <p> Do you want to checkout</p> 
            <p><strong>Your Total Price :{props.totalprice}</strong> </p>
            <Button btnTyp="Danger"  clicked={props.purchaseCancel} >CANCEL</Button>
            <Button btnTyp="Success" clicked ={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    );
}
export default orderSummary