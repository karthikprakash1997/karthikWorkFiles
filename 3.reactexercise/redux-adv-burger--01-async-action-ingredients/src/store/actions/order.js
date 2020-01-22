import * as actionType from './actionTypes';
import axios from 'axios'
export const purchaseBurgerSucces=(id,orderData)=>{
    return {
        type: actionType.PURCHASE_BURGER_SUCCESS,
        orderId:id,
        prderData:orderData
    }
}

export const purchaseBurgerFail=(error)=>{
    return {
        type: actionType.PURCHASE_BURGER_FAIL,
        error:error
    }
}

export const purchaseBurgerStart = ()=>{
    return {
        type:actionType.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData)=>{
    return dispatch=>{ 
        dispatch(purchaseBurgerStart())
        axios.get('/orders.json',orderData)
            .then(res => {
                dispatch(purchaseBurgerSucces(res.data,orderData))
                
            })
            .catch(err => {
                dispatch(purchaseBurgerFail(err ))
            });
 
    }
}