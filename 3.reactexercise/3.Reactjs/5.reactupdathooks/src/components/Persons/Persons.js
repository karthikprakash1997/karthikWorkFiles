import React, {Component}from 'react';
import Person from './Project/Project';
import propTypes from 'prop-types';


class Persons extends Component {

constructor(props){
    super(props);
    console.log("[Project] inside a construcor"); 
}
static getDerivedStateFromProps(props,state){
    console.log("[Project.js] inside a will mount from deried state");
}
componentDidMount(rpops){
    console.log("[Project.js] inside a will mount");
}

    render(){
        console.log("inside render f persons")
        return this.props.persons.map((people,index) =>{
  
            return <Person 
            
            click ={() => this.props.clicked(index)}
            name = {people.name} 
            age = {people.age} 
            key ={people.id}
            authenticated ={this.props.authenticated}
            changed={(event)=>this.props.changed(event,people.id)
            }/>
        
        });
        
    }
         
    
} 

Persons.propTypes ={
    click: propTypes.func,
    name: propTypes.string,
    age: propTypes.number,
    changed: propTypes.func
}

    export default Persons;
