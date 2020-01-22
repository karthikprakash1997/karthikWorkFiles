import * as actionTypes from './action';


const INGREDIANT_PRICE = {
    salad:40,
    bacon:50,
    meat:100,
    cheese:50
  }

const initialState={
    ingrediants:{
        cheese:0,
        bacon:0,
        salad:0,
        meat:0
    },
    totalPrice : 100,
}

const reducer =(state=initialState,action)=>{

    switch(action.types)
   {
        case actionTypes.ADD_INGREDIANT :
            return {
              ...state,
               ingrediants:{
                ...state.ingrediants,
                [action.ingrediantsName]:state.ingrediants[action.ingrediantsName]+1 },

                totalPrice:state.totalPrice+INGREDIANT_PRICE[action.ingrediantsName]
            }
            

        case actionTypes.REMOVE_INGREDIANT:
            return {
                ...state,
                 ingrediants:{
                  ...state.ingrediants,
                  [action.ingrediantsName]:state.ingrediants[action.ingrediantsName]-1 },
                  totalPrice:state.totalPrice-INGREDIANT_PRICE[action.ingrediantsName]
            }
        
        default: return state;
    
    }
    
   
    
}
export default reducer