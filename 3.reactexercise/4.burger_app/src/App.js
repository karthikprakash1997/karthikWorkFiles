import  React, {Component} from 'react';
import './App.css';
import Layout from './componenets/Layout/Layout'
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Checkout from './container/Checkout/Checkout';
import {Route, Switch} from 'react-router-dom';
import Orders from './container/Orders/Orders'



class App extends Component {

  // state={
    //  show:true
   //}
   //componentDidMount(){
     // setTimeout(() => {
       //  this.setState({show:false})
         
      //}, 5000);
   //} 
   
render(){
  return (
     <div> 
        <Layout>
           <Switch>
            <Route path = '/' exact component ={BurgerBuilder}></Route>
            <Route path = '/checkout' component ={Checkout}></Route> 
            <Route path = '/orders' component ={Orders}></Route> 
            </Switch>
         </Layout>
      </div>);}

}

export default App;
