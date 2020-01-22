import React from 'react'
import styles from './Cockpit.css'



const cockpit = (props) => {

    let classes = [];
    let buttonclass ='';

    if(props.listselector)
       { 
        buttonclass = styles.Blue;
    }
    if(props.persons.length <=1){
        classes.push(styles.red);
    }

    if(props.persons.length === 2){
        classes.push(styles.font);
    }

    return(

     <div className = {styles.Cockpit}>
         <h1>Hello folks welcome to react</h1>
            <p className = {classes.join(' ')}> This is a demo app</p>
            <button className={buttonclass}
                onClick = {props.clicked}>Switch 
            </button>
     </div>
    );
}
export default cockpit;