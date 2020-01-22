import React, { Component } from 'react';
import Person from './Project/Project';
import './App.css';

class App extends Component {
//CREATE A STATE
 state = 
 {
   persons: [
     {name : "ravi", age: 28},
     {name : "cd", age:26}
    ]
 }

 //CONDITIONA DN FUNCTIONS NEEDED TO BE EXECUTED WHEN WE CLLICK A BUTTON
 //HERE WE CHANGE THE STATE OF THE APP
 buttonEventHandler1 = ()=>{
    
    this.setState( 
      {
        persons :[
      {name : "ram" , age: 26},
      {name : "cd", age:26}]

    
      })
 
}

nameChangedHandler = (event)=>{
  this.setState( 
      {
        persons :[
      {name : "kp" , age: 26},
      {name : event.target.value, age:26}]

      })
 
}
//MAIN RENDER FUNCTION
  render()
  {

    //creating style option using javascript

    const style ={
      backgroundColor : 'blue',
      border : '1px',
      padding : '8px',
      font : 'inherit'
    }
  return (

     <div className="App">
      <h1>Hello folks welcome to react</h1>
      <button
         style ={style} 
         onClick = {this.buttonEventHandler1}>switchName </button>
      <Person name = {this.state.persons[0].name} click={this.buttonEventHandler1.bind(this,"ravi")}/> 
      <Person name = {this.state.persons[1].name} changed={this.nameChangedHandler} />
      </div> 
      );
  }
// CALLING PERSON.JS AND PASSING VALUES TO IT FROM THIS STATE 
}
export default App;
