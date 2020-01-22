import React from 'react';
import Classes from './Project.css';
import Aux from '../../../hoc/Aux';
import withClasses from '../../../hoc/withClass'



const person = (props)=>
{
  
return (
     <Aux>
    {props.authenticated ? <p>i am authenticated</p>:<p>not authenticated</p>}
    <p
      onClick = {props.click}>
      Hi i am {props.name}  and i am a trainee</p>
    <input type = "Text" onChange ={props.changed} ></input></Aux>)
}
export default withClasses(person,Classes.Person);