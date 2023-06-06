import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { AddContact } from '../Redux/Action';
import { useNavigate} from 'react-router-dom'
import './Form.css'

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
    <div className='form_container'>
         <label className='labels'>First Name</label><br/>
         <input type="text" className='textfeild' name='firstName' onChange={handleChange} value={data.firstName} /><br/>
         <label className='labels'>Last Name</label><br/>
         <input type="text" className='textfeild'name='lastName' onChange={handleChange} value={data.lastName} /><br/>
         <label className='labels'>Phone Number</label><br/>
         <input type="number"className='textfeild' name='phoneNumber' onChange={handleChange} value={data.phoneNumber} /><br/>
         <button onClick={handleCreateContact} className='form_button'>Add</button>
    </div>     
  )
}

export default AddContacts