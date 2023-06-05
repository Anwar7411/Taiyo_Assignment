import {Get_Data_Success} from './ActionTypes'

export const getContacts=(payload)=>{
    return {
    type:Get_Data_Success,
    payload
    }
}

export const AddContact=(data,el)=>(dispatch)=>{
    let contactsArr=[...data,el]
    dispatch(getContacts(contactsArr))
}

export const EditContact=(data,el)=>(dispatch)=>{
    let contactsArr=[...data]
    data.forEach((element,i )=> {
        if(el.id==element.id){
            contactsArr[i]=el
        }
    });
    dispatch(getContacts(contactsArr))
}

export const DeleteContact=(data,el)=>(dispatch)=>{
    let contactsArr= data?.filter((element,i )=> {
        return el.id!=element.id
    });
    dispatch(getContacts(contactsArr)) 
}