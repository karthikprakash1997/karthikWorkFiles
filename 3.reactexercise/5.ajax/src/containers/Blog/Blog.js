import React, { Component } from 'react';
//import axios from 'axios'
import'./Blog.css';
//import Posts from '../Posts/Posts';
import {Route,NavLink,Switch} from 'react-router-dom'
import Posts from '../Posts/Posts';
//import NewPosts from '../NewPost/NewPost';
import FullPosts from '../FullPost/FullPost';
import asyncComponent from '../../hoc/asyncComponent'

//lazy loading 
const AsyncNewPost= asyncComponent(()=>{
    return import('../NewPost/NewPost')
});

class Blog extends Component {
    


    render () {
            return (
            <div >
                <header className="Blog" >
                    <nav >
                        <ul>
                            <li>
                                <NavLink to="/" 
                                    exact 
                                    activeClassName='active'>
                                     Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: '/new-post',
                                    hash:'#submit',
                                    search:'?quick-submit=true'
                                }}> NewPosts</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path ="/" exact render={()=><h1>Home</h1>}></Route>
                <Route path ="/" render={()=><h1>Homehh</h1>}></Route>*/}
                
                <Switch> 
                <Route path ="/" exact component = {Posts}></Route>                                                 
                <Route path ="/new-post" component = {AsyncNewPost}></Route>
                <Route path ="/:id" component = {FullPosts}></Route>

                </Switch>  
            </div>
        );
    }
}

export default Blog;