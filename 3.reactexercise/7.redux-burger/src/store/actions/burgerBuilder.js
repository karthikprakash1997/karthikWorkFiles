import * as actionsTypes from '../actions/actionsTypes';
import axios from 'axios'

export const addIngredient=(name) =>{
    return{
        type:actionsTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}
export const removeIngredient=(name) =>{
    return{
        type:actionsTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}
export const setIngredient=(ingredientname) =>{
    return{
        type:actionsTypes.SET_INGREDIENT,
        ingredientName: ingredientname
    }
}
export const fetchIngredientFailed=() =>{
    return{
        type:actionsTypes.FETCH_INGREDIENT_FAILED,
        
    }
}
export const initIngredients=()=>{
    return dispatch=>{

        axios.get( 'https://burgerapp-d4260.firebaseio.com/ingredients.json' )
             .then( response => {
                 dispatch(setIngredient(response.data))
             } )
             .catch( error => {
                dispatch(fetchIngredientFailed( ))
        } );

    }
}