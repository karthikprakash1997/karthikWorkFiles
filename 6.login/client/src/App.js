import React from 'react';
//import Get from '../src/get'
import './App.css';
import Auth from '../src/container/Auth/Auth';
import {Route,Switch} from 'react-router-dom';
import signUp from './container/signUp/signUp';
import dashboard from './container/dashboard/dashboard'



function App() {
  return (
    <div className = "App" >
      <Switch>
      <Route exact path = '/dashboard'  component={dashboard}></Route> 
       <Route exact path = '/signUp'  component={signUp}></Route>
       <Route exact path = '/'  component={Auth}></Route> 
      </Switch>
    </div>
  );
}

export default App;
