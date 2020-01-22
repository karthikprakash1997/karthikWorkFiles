import React, { Component } from 'react';
import Person from './Project/Project';
import ClassStyle from './App.css';
class App extends Component {
//CREATE A STATE
 state = 
 {
   persons: [
     {id : 1,name : "ravi", age: 28},
     {id : 2,name : "cd", age:26},
     {id: 3,name: "dhoni", age:24}
    ],
    listSelector: false
 }

 //CONDITIONS and FUNCTIONS NEEDED TO BE EXECUTED WHEN WE CLICK A BUTTON
 //HERE WE CHANGE THE STATE OF THE APP

 buttonEventHandler1 = ()=>{
    
    this.setState( 
      {
        persons :[
      {name : "ram" , age: 26},
      {name : "cd", age:26},
      {name: "dhoni", age:24}]

    
      })
 
}

//to deet elemnts when the parageaph is clicked
deleteEventHandler = (personIndex) => {
  const persons = this.state.persons.slice();
  persons.splice(personIndex,1);
  this.setState({persons:persons});
  
}
//to show a list  when button is clicked
toggleEventHandler =() => {
  const doState = this.state.listSelector;
  this.setState({listSelector: !doState});
}
//to chage the name typed in the input box
nameChangedHandler = ( event, id ) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {...this.state.persons[personIndex]};
  // const person = Object.assign({}, this.state.persons[personIndex]);
  person.name = event.target.value;
  const persons = [...this.state.persons];
  persons[personIndex] = person;
  this.setState( {persons: persons} );
}

//MAIN RENDER FUNCTION
  render()
  {


    //creating style option using javascript
    
    const style ={
      backgroundColor : 'blue',
      border : '1px',
      padding : '8px',
      font : 'inherit',
      
    }
    
    let persons = null;

    if(this.state.listSelector === true)
    {
      persons =(  
      <div>
        {
            this.state.persons.map((people,index) =>{
              return <Person 
              click ={() => this.deleteEventHandler(index)}
              name = {people.name} 
              age = {people.age} 
              key ={people.id}
              changed={(event)=>this.nameChangedHandler(event,people.id)} /> })}
      </div> );
      style.backgroundColor ='pink';//dynamically adding a backgroung color
      
     }
  

//Dynamically adding and calling a class
let classes = [];
if(this.state.persons.length <=1){
  classes.push('red');
}

if(this.state.persons.length === 2){
  classes.push('font');
}
    
  return (
    
   <div className = {ClassStyle.App} >
      <h1>Hello folks welcome to react</h1>
        <p className = {classes.join(' ')}> This is a demo app</p>
        <button
        style ={style} 
        onClick = {this.toggleEventHandler}>switchName </button>
        { persons }
   </div> 
          
     
  );
  }
// CALLING PERSON.JS AND PASSING VALUES TO IT FROM THIS STATE 
}
export default App;
