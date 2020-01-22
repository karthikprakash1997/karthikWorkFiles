import React, { Component } from 'react';
import axios from 'axios';


import './FullPost.css';

class FullPost extends Component {
    state={
        loadedPost: null
    }

    componentDidMount(){

     //checkign if there is id we get response 
        if(this.props.match.params.id)//match.params.id is the parameter that is end as a link to router
        {   //checking if only loadedposts or id changes we get the response
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id!==this.props.id))
            {
            axios.get("/posts/"+this.props.match.params.id)
            .then(response=> {
                this.setState({loadedPost:response.data})
               // console.log(this.state.loadedPost);
            })
        }
        }
    }

    DeleteEventHandler=()=>{
        axios.delete("/posts/"+this.props.id)
        .then(response=> {
            console.log(response);
            
        })

    }
    render () {
        //console.log(this.props.id);
       
        
        let post = <p>Please select a Post!</p>;
        if(this.props.id){
            post = <p>loading...</p>;
        }
        if(this.state.loadedPost)
        {   console.log(this.state.loadedPost);
        
           // console.log(this.state.loadedPost.title);
        
            post = (
            
                <div className="FullPost">
               <h1>{this.state.loadedPost.title}</h1>
                      <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.DeleteEventHandler}>Delete</button>
                    </div>
                </div>
    
            );
                
        }
  return post;
 }
}

export default FullPost;