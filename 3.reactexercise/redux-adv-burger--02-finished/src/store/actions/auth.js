import * as actionTypes from './actionTypes';
import axios from 'axios'
export const authStart = ( ) => {
    return {
        type: actionTypes.AUTH_START
        
    };
};

export const authSuccess = ( userId,idToken) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        userId:userId,
        idToken:idToken

        
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error:error
        
    };
};

export const auth=(email,password,isSignup)=>{
    return dispatch=>{
     console.log(email,password);
     
    const authData={
        email:email,
        password:password,
        returnSecureToken:true
    }

    let url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD0DcaXjUlCsjRJmIlWuxoa-QQcLKH_8cU';
    if(isSignup)
    {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD0DcaXjUlCsjRJmIlWuxoa-QQcLKH_8cU'
    }
        axios.post(url,authData)
        .then(response=>{
            console.log(response);
            dispatch(authSuccess(response.data.userId,response.data.localId))
            
        })
        .catch(err=>
            {console.log(err);
             dispatch(authFail(err.response.data.error))   
            }
            )
    }

}