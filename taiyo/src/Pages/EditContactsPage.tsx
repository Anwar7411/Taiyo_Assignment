import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { EditContact } from '../Redux/Action';
import { useNavigate, useParams } from 'react-router';

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
       <div>
          <label>First Name</label><br/>
          <input type="text" name='firstName' onChange={handleChange} value={data?.firstName} /><br/>
          <label>Last Name</label><br/>
          <input type="text" name='lastName' onChange={handleChange} value={data?.lastName} /><br/>
          <label>Phone Number</label><br/>
          <input type="number" name='phoneNumber' onChange={handleChange} value={data?.phoneNumber} /><br/>
          <button onClick={handleCreateContact}>Submit</button>
       </div>
    )
}

export default EditContactsPage