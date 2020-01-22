import  React, {Component} from 'react';
import Post from '../../components/Post/Post';
import classes from '../../components/Post/Post.css';
import axios from 'axios';
import {Link} from 'react-router-dom'
class Posts extends Component {
    state={
        posts:[],
        selectedPostId:null
    }
    componentDidMount(){ 

        axios.get("/posts")
        .then(response=>
        
            {   const post=response.data
                const posts = post.slice(0,4);//get the response and slice it to first four elements
                const updatedPosts = posts.map(post=>{return {...post, author:"max"}});//get the posts and add author to it 
                this.setState({posts:updatedPosts});//setting the state to the updated posts
            //console.log(response)
         })
        console.log(this.props);
        
    }
    
    clickEventHandler=(id)=>{
        this.setState({selectedPostId:id});
        this.props.history.push('/'+ id);
       // the above stateent can alos be used to [ush and navigate to another]
     }
    render(){
        let post = this.state.posts.map(post=> {
            return <Link to={'/posts/'+post.id} key ={post.id} ><Post 
                title={post.title} 
                author={post.author}
                clicked={()=> this.clickEventHandler(post.id)}/></Link>} )//mapping and taking title and key from the array and sending the required datas to the componenets
    
                return(
                    <section className={classes.Post}>
                            {post}
                    </section>
            )
    }
}
export default Posts