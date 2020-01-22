import * as actionType from '../actions/actionType'

export const saveResult=(result)=>
{
   return{
       type:actionType.STORE_RESULT,
       result:result
   }
}

//asynchronous function executin with the help of thunk 
export const store_result = (result)=>
{
    return (dispatch,getState)=>{
        setTimeout(()=>{
            const olcCOunter=getState().ctr.counter;
            console.log(olcCOunter);
            
            dispatch(saveResult(result))
        },2000)
    }
}
export const delete_result=(id)=>
{
   return{
       type:actionType.DELETE_RESULT,
       resultElid:id
}
}