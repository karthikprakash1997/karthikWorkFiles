import  React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'


const controls = [
    {label:'salad' , type:'salad'},
    {label:'bacon' , type:'bacon'},
    {label:'Cheese' , type:'cheese'} ,
    {label:'Meat' , type:'meat'}
]
    
const buildControls =(props)=>
{ 

    return (
        <div className = {classes.BuildControls}>
            <p className ={classes.Price}> Current Price ={props.price}</p> 
            {controls.map(ctrl =>(
                <BuildControl 
                    key={ctrl.label} 
                    label ={ctrl.label} 
                    added={()=>props.ingrediantAdded(ctrl.type)}
                    deleted={()=>props.ingrediantDeleted(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                /> 
                  
            ))}
            <button className ={classes.OrderButton} 
                disabled={!props.purchase}
                onClick = {props.purchasing}>
                ORDER NOW</button>
        </div>
    );
}
export default buildControls