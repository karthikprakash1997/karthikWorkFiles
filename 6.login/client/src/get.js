import axios from 'axios';
import React, {Component} from 'react';


class Get extends Component {

    state={
        getData:null,
        name:null
    }

    buttonHandler=()=>{
        axios.get('http://localhost:3002/contact')
        .then(response=> {
            response.data.map((data,index)=>{
                this.setState({getData:data.firstName})
                return data.firstName
        })
          // this.setState({getData:response.data})
            //console.log(`data ${response.data}`);

        }).catch(err=>console.log(err))
    }

    inputHandler=(event)=>{
        this.setState({name:event.target.value})
        console.log( this.state.name);  
    }

    SubmitHandler=(event)=>
    {
        event.preventDefault();
        axios.post('http://localhost:3002/contact', {
            firstName: this.state.name,
            lastName: 'prak'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });}

    
    render(){
        return(
         <div>
             <p> data:{this.state.getData}</p>
             <form onSubmit={this.SubmitHandler}>
                 <input onChange={(event)=>this.inputHandler(event)}>
                 </input>
                 <button > SUBMIT</button>
             </form>
             <button onClick={this.buttonHandler}>click to update</button>
         </div>
        )
    }}
export default Get

