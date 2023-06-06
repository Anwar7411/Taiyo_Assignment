import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { EditContact } from '../Redux/Action';
import { useNavigate, useParams } from 'react-router';
import './Form.css'

const EditContactsPage = () => {
    const contacts=useSelector((store:any)=>store.contacts)
    const [ data,setData ]= useState<any>({});
    const navigate=useNavigate();
    const params=useParams();

    useEffect(()=>{
        if(contacts){
            contacts.forEach((element:any) => {
                if(element.id==Number(params.id)){
                    setData(element)
                }
            });
        }
    },[contacts])
      console.log("data",data)
       const dispatch:any=useDispatch();
  
        const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
         setData({...data,[e.target.name]:e.target.value})
        }
   const handleCreateContact=()=>{
      dispatch(EditContact(contacts,data));
      navigate('/')
   }
  
    return (
       <div className='form_container'>
          <label className='labels'>First Name</label><br/>
          <input type="text"  className='textfeild' name='firstName' onChange={handleChange} value={data?.firstName} /><br/>
          <label className='labels'>Last Name</label><br/>
          <input type="text" className='textfeild' name='lastName' onChange={handleChange} value={data?.lastName} /><br/>
          <label className='labels'>Phone Number</label><br/>
          <input type="number" className='textfeild' name='phoneNumber' onChange={handleChange} value={data?.phoneNumber} /><br/>
          <button className='form_button' onClick={handleCreateContact}>Submit</button>
       </div>
    )
}

export default EditContactsPage