import React from 'react';
import Person from './Project/Project';


const persons = (props) => props.persons.map((people,index) =>{
  
    return <Person 
    click ={() => props.clicked(index)}
    name = {people.name} 
    age = {people.age} 
    key ={people.id}
    changed={(event)=>props.changed(event,people.id)}/>

});

    export default persons;
