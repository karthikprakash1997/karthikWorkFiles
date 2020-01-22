import  React from 'react';
import BackImg from '../../assets/images/burgerlogo.png'
import classes from './Logo.css'
const Logo =(props)=>(
    <div className={classes.Logo} style={{height: props.height }}>
        <img src={BackImg} alt ="MyBurger"></img>
    </div>
);
export default Logo