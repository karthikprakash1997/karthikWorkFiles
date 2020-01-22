import  React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';
const checkoutSummary =(props)=>{
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We Hope it tastes well!</h1>
            <div style={{width:'100%',height:'300px',margin:'auto'}}>
                <Burger ingrediants={props.ingrediants}>
                </Burger>
            </div>
            <Button btnTyp='Danger' clicked={props.checkoutCancelled}> CANCEL</Button>
            <Button btnTyp='Success' clicked={props.checkoutContinued}> CONTINUE</Button>
        </div>
    );
}
export default checkoutSummary;