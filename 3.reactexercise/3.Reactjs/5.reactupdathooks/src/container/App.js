import React, { Component } from 'react';
import Persons from '../components/Persons/Persons.js';
import styles from '../container/App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass'
class App extends Component {

  constructor(props){
    super(props);
    console.log("[App.js] inside a construcor"); 
  }
  componentWillMount(props){
    console.log("[App.js] inside a will mount");
  }
  static getDerivedStateFromProps(nextProps,previousState){
    console.log("updtate get derived", previousState,nextProps);
    return previousState
    
  }
//CREATE A state
 state = 
 {
   persons: [
     {id : 1,name : "ravi", age: 28},
     {id : 2,name : "cd", age:26},
     {id: 3,name: "dhoni", age:24}
    ],
    listSelector: false,
    authenticated: false
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
  //here we donot chnage the state direclty we create a new copy the elemnts in a state change the elements ans then change the state
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

loginEventHandler=()=>{
  this.setState({authenticated:true});
}
//MAIN RENDER FUNCTION
render()
{
  console.log("[App.js] inside render");
    
  let persons = null;

  if(this.state.listSelector === true)
  {
    persons =(  
        <Persons 
         persons = {this.state.persons}
         clicked = {this.deleteEventHandler}
         changed = {this.nameChangedHandler}
         isAuthenticated ={this.state.authenticated}
         >
        </Persons>
    );
   // styles.buttun.backgroundColor ='pink';//dynamically adding a backgroung color
    
   }


//Dynamically adding and calling a class
  
return (
<Aux>
 
  
   <Cockpit  
    listSelector ={this.state.listSelector}
    persons = {this.state.persons}
    clicked = {this.toggleEventHandler}
    login ={this.loginEventHandler}

   ></Cockpit>
      { persons }
 
 </Aux>        
   
);
}
// CALLING PERSON.JS AND PASSING VALUES TO IT FROM THIS STATE 
}
export default withClass(App,styles.App);

