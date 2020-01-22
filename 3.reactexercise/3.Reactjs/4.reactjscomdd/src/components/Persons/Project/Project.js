import React from 'react';
import Classes from './Project.css'



const person = (props)=>
{
  
return (
    <div>
    <p
      className={Classes.Person}
      onClick = {props.click}>
      Hi i am {props.name}  and i am a trainee</p>
    <input type = "Text" onChange ={props.changed} ></input></div>)
}
export default person;