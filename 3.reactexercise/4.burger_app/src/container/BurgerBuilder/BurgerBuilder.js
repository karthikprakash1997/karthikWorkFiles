import  React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../componenets/Burger/Burger';
import BuildControl from '../../componenets/Burger/BuildControls/BuildControls';
import Modal from '../../componenets/UI/Modal/Modal';
import OrderSummary from '../../componenets/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../componenets/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'



const INGREDIANT_PRICE = {
  salad:40,
  bacon:50,
  meat:100,
  cheese:50
}

class BurgerBuilder extends Component 
{
  state = 
  {
    ingrediants:null,
    totalPrice : 100,
    a: false,
    purchasing: false,
    loader:false,
    error:false

  }
  
  componentDidMount()
  {
    axios.get("https://burgerapp-d4260.firebaseio.com/ingredients.json")
    .then(response=> {
      this.setState({ingrediants:response.data});
      //console.log(this.state.ingrediants);  
    })
    .catch(error=> {this.setState({error:true})})
  }//to fectch data from the server

  
  updatePurchaseState (ingredients) {
    const sum = Object.keys( ingredients )
        .map( igKey => {
            return ingredients[igKey];
        } )
        .reduce( ( sum, el ) => {
            return sum + el;
        }, 0 );
    this.setState( { a: sum > 0 } );
}

  
  updateEventHandler = (type) =>{
    const oldCount = this.state.ingrediants[type];
    const newCount = oldCount + 1;
    const updatedIgrediants = {...this.state.ingrediants};
    updatedIgrediants[type]=newCount;
    const priceAddition= INGREDIANT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice+priceAddition;
    this.setState( {totalPrice: newPrice , ingrediants: updatedIgrediants}); 
    this.updatePurchaseState(updatedIgrediants);
  }
  deleteEventHandler = (type) =>{
    const oldCount = this.state.ingrediants[type];
      if(oldCount<=0){
        return;
    }
    const newCount = oldCount - 1;
    const updatedIgrediants = {...this.state.ingrediants};
    updatedIgrediants[type]=newCount;
    const priceDeduction= INGREDIANT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice-priceDeduction;
    this.setState( {totalPrice: newPrice , ingrediants: updatedIgrediants}); 
    this.updatePurchaseState(updatedIgrediants);
  }

  OrderNowEventHandler = ()=>{
    this.setState({purchasing:true})
  }

  puchaseCancelHandler=()=>{
    this.setState({purchasing:false})
  }

  purchaseContiueHandler=()=>{
     const queryParams=[];
     queryParams.push('price='+this.state.totalPrice)
   for(let i in this.state.ingrediants){
     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingrediants[i]))
   }
    const queryString=queryParams.join('&')
    this.props.history.push({ 
     pathname:'/checkout',
     search:'?'+ queryString
    })
  }
   
  render(){

    //console.log(this.state.purchasble);
    //console.log(this.state.a);
    
    
    const disabledInfo={
      ...this.state.ingrediants
    }
    for(let key in disabledInfo ){
      disabledInfo[key] =  disabledInfo[key] <=0;
      //console.log(disabledInfo[key]);
    }

   let orderSummary = null;

    
    let burger= this.state.error? <p>Application cant load</p>:<Spinner/>
    if(this.state.ingrediants){
      burger= (
        <Aux>
         <Burger ingrediants={this.state.ingrediants}></Burger>
         <BuildControl 
            ingrediantAdded = {this.updateEventHandler}
            ingrediantDeleted= {this.deleteEventHandler} 
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchase={this.state.a}
            purchasing={this.OrderNowEventHandler}
          ></BuildControl>
        </Aux> ) ;

        orderSummary=(<OrderSummary 
          ingrediants ={this.state.ingrediants}
          purchaseContinue={this.purchaseContiueHandler} 
          purchaseCancel={this.puchaseCancelHandler}
          totalprice={this.state.totalPrice}/>)
    }

    if(this.state.loader){
      orderSummary = <Spinner> </Spinner>
    }

    return (
      <Aux> 
        <Modal show={this.state.purchasing} modalClosed={this.puchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux> );
  }

}

export default withErrorHandler( BurgerBuilder,axios)
