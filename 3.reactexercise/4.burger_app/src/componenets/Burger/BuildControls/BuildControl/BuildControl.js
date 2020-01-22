import  React from 'react';
import classes from './BuildControl.css'
const BuildControl =(props)=>{
    return (
        <div className ={classes.BuildControl}>
            <div className ={classes.Label}> {props.label}</div>
            <button className ={classes.Less} onClick={props.added}> ADD</button>
            <button className ={classes.More} onClick={props.deleted}  disabled = {props.disabled} >REMOVE</button>
        </div>
    );
}
export default BuildControl