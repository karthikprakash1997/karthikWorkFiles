import  React, {Component} from 'react'; 
import CheckouSummary from '../../componenets/Order/ CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData'

class Checkout extends Component {
    state={
        ingrediants:null,
        totalprice:0
    }
    
    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingrediants ={};
        let price=0;
        for(let param of query.entries())
        {
            if(param[0]==='price')
            {
               price=param[1];
               this.setState({totalprice:price})
               console.log(this.state.totalprice);
               
            }
          
            else
            {
                ingrediants[param[0]] = +param[1];
            }
            
        }
        this.setState({ingrediants:ingrediants})
    }
    CheckoutCancelled=()=>{
       this.props.history.goBack();
    }
    CheckoutContinued=()=>{
        this.props.history.replace('/checkout/contact-data');

    }
    render()
    {
        return (
           <div> 
               <CheckouSummary ingrediants={this.state.ingrediants} checkoutCancelled={this.CheckoutCancelled} checkoutContinued={this.CheckoutContinued} />
               <Route path ={this.props.match.path +'/contact-data'} render={()=>(<ContactData ingrediants={this.state.ingrediants} totalprice={this.state.totalprice}/>)}></Route>
        </div>)
    }
}
export default Checkout