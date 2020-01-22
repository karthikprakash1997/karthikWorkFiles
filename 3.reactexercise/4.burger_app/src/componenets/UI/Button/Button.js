import  React from 'react';
import classes from './Button.css'
const Button =(props)=>(
    
        <button className={[classes.Button,classes[props.btnTyp]].join(' ')}
            onClick = {props.clicked} disabled={props.disabled}>
            {props.children}
        </button>
    
);
export default Button