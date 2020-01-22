import React, { Component } from 'react';
import Persons from '../components/Persons/Persons.js';
import styles from '../Container/App.css';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
//CREATE A 


shouldComponentUpdate(nextProps,nextState){
  return true;
}
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

//to delete elements when the paragraph is clicked
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
  
  
  
  let persons = null;


  if(this.state.listSelector === true)
  {
    persons =(  
        <Persons 
         persons = {this.state.persons}
         clicked = {this.deleteEventHandler}
         changed = {this.nameChangedHandler}>
        </Persons>
    );
   // styles.buttun.backgroundColor ='pink';//dynamically adding a backgroung color
    
   }


//Dynamically adding and calling a class
  
return (
  
 <div className = {styles.App} >
   <button onClick = {()=> {this.setState({listSelector :true})}}>ShowPersons</button>
   <Cockpit  
    listSelector ={this.state.listSelector}
    persons = {this.state.persons}
    clicked = {this.toggleEventHandler}

   ></Cockpit>
      { persons }
 </div> 
        
   
);
}
// CALLING PERSON.JS AND PASSING VALUES TO IT FROM THIS STATE 
}
export default App;

