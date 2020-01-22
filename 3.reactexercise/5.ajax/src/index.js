import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL="https://jsonplaceholder.typicode.com" ;//set a default url
axios.defaults.headers.common['AUTHORIZATION'] = 'AUTH-TOKEN';//SET A COMMON HEADER
axios.defaults.headers.post['CONTENT-TYPE']='application/json'
//we can also create a instance by creating a seperate java script file by creating a instace and accessing it  
axios.interceptors.request.use(request=>{
    console.log(request);
    //edit request config such as header etc.,
    return request;
},error=>{
    console.log(error);
    return Promise.reject(error);
    }
)
 

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
