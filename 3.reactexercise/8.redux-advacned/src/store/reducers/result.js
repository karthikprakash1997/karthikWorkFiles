import * as actionTypes from '../actions/actionType';
import updatedObject from './utility'

const initialState = {
    results: []
};
//to make leaner code or switch case code 

const deleteResult=(state,action)=>{
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);
    return updatedObject(state,{results: updatedArray})

}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
            return deleteResult(state,action)
    }
    return state;
};

export default reducer;