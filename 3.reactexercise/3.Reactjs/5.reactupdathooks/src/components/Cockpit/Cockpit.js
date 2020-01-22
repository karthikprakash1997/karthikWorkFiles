import React from 'react'
import styles from './Cockpit.css'
import Aux from '../../hoc/Aux'



const cockpit = (props) => {

    let classes = [];
    let buttonclass = styles.button;

    if(props.listselector)
       { 
        buttonclass = [styles.button,styles.Blue].join('');
    }
    if(props.persons.length <=1){
        classes.push(styles.red);
    }

    if(props.persons.length === 2){
        classes.push(styles.font);
    }

    return(

     <Aux>
         <h1>Hello folks welcome to react</h1>
            <p className = {classes.join(' ')}> This is a demo app</p>
            <button className={buttonclass}
                onClick = {props.clicked}>Switch 
            </button>
            <button className={buttonclass}
                onClick = {props.login}>
                log in 
            </button>
     </Aux>
    );
}
export default cockpit;