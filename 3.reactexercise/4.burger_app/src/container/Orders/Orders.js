import  React, {Component} from 'react';
import Order from '../Orders/Order/Order';
import axios from '../../axios-orders';
//import ErrorHandler from '../../hoc/withErrorHandler'
class Orders extends Component {

    state={
        orders:[],
        loading:true
    }

    componentDidMount()
    {
       axios.get('/order.json').then(res=>{
        
           
          let fetchedOrders=[];
           for(let key in res.data){
               fetchedOrders.push({...res.data[key] ,id:key})
               
               

           }
           this.setState({orders:fetchedOrders,loading:false})
           //console.log(res.data)
       })
    }
    
    render(){

        console.log(this.state.orders.map(order=>(order.ingredients)));
        
             return(
                 <div>
                   {this.state.orders.map(order=>(
                       <Order key={order.id}
                       ingrediants={order.ingredients}
                       price={+order.price}/>
                   ))}
                 </div>
             )
}
}
export default Orders
//+ is used to convert a string to number