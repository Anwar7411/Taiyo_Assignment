import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { AddContact } from '../Redux/Action';
import { useNavigate} from 'react-router-dom'

const AddContacts = () => {
  const contacts=useSelector((store:any)=>store.contacts)
  const [ data,setData ]= useState<any>({});
  const navigate=useNavigate();

  console.log("datta",data)

  useEffect(()=>{
    if(contacts){
    setData({id:(contacts.length+1),firstName:"",lastName:"",phoneNumber:""})
    }
  },[contacts])

 const dispatch:any=useDispatch();

  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
   setData({...data,[e.target.name]:e.target.value})
  }
const handleCreateContact=()=>{
dispatch(AddContact(contacts,data));
navigate('/')
}
  return (
    <div>
         <label>First Name</label><br/>
         <input type="text" name='firstName' onChange={handleChange} value={data.firstName} /><br/>
         <label>Last Name</label><br/>
         <input type="text" name='lastName' onChange={handleChange} value={data.lastName} /><br/>
         <label>Phone Number</label><br/>
         <input type="number" name='phoneNumber' onChange={handleChange} value={data.phoneNumber} /><br/>
         <button onClick={handleCreateContact}>Add</button>
    </div>     
  )
}

export default AddContacts