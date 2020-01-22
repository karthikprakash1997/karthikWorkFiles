import  React, {Component} from 'react';
import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from  '../dashboard/dashboard.css'

let add=[];
let ln=[];
class Dashboard extends Component {
    
    state={
        data:[],
        firstName:null,
        lastName:null
    }
    componentDidMount(){
        axios.get('http://localhost:3003/register')
   .then(response=> {
         this.setState({data:response.data});
         console.log(this.state.data);
         
        for (let index = 0; index < this.state.data.length; index++) {
              
            add[index] = this.state.data[index].firstName
            ln[index]=this.state.data[index].lastName
         
         }

         this.setState({firstName:add});
         this.setState({lastName:ln});
        // console.log(this.state.firstName);      
    })
    }
    
   

    render () {
        console.log(this.state.firstName)
        let element = null;
        if(this.state.firstName){
             element = this.state.firstName.map((el,index)=>{return(
            <div key={index} >
            <li>{el}</li>
            </div>)})
        }else{
            element=<Spinner></Spinner>
        }

        let elementl = null;
        if(this.state.lastName){
             elementl = this.state.lastName.map((el,index)=>{return(
            <div key={index} >
            <li>{el}</li>
            </div>)})
        }else{
            elementl=<Spinner></Spinner>
        }

    return (
       <div className={classes.Dashboard3}>
           <div className={classes.Dashboard}>
          firsName:{element}    
           </div>

           <div className={classes.Dashboard2}>
           lastName:{elementl}
           </div>
       </div>
       
         
        );
    }
}


export default Dashboard