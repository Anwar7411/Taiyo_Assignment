import { Get_Data_Success } from "./ActionTypes"

const initialState={
contacts:[]
}

export const Reducer=(state = initialState, action)=>{

 const {type,payload}=action

 switch(type){

    case Get_Data_Success : return {
        ...state,
        contacts:payload
    }

     default:  return state
     
 }
}