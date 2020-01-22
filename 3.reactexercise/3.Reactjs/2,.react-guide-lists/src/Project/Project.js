import React from 'react';



const person = (props)=>
{
  const style2= {
    '@media(min-width : 500px)':
    {
      width: '450px'
    }
  };
return (
    <div>
    <p
      style={style2}
      onClick = {props.click}>
      Hi i am {props.name}  and i am a trainee</p>
    <input type = "Text" onChange ={props.changed} ></input></div>)
}
export default person;