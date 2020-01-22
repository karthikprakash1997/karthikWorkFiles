import * as actionType from '../actions/actionTypes';
const initialState = {
    orders:[],
    loading:false
}

const reducer = (state = initialState,action)=>{
    switch(action.type){
        case actionType.PURCHASE_BURGER_START:
            return {
                ...state,
                loading:true

            }
        
        case actionType.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading:false
            }
        default:
            return state;
    }

}

export default reducer