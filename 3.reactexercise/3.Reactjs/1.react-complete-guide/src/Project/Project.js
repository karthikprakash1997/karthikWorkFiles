import React from 'react';

const style1 =
 {

    width: '60%',
    margin: 'auto',
    border: '1px solid black',
    padding: '6px'
        
}
const person = (props)=>
{
return (
    <div>
    <p
      style={style1}
      onClick = {props.click}>
      Hi i am {props.name}  and i am a trainee</p>
    <input type = "Text" onChange ={props.changed} ></input></div>)
}
export default person;