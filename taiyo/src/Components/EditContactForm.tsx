import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField,Modal } from '@mui/material';
import {useDispatch} from 'react-redux'
import { EditContact } from '../Redux/Action';
// interface contactObject{
//     firstName:String,
//     lastName:String,
//     status:string
//     }

interface propsCheck{
    open:boolean,
    setOpen:(value:any)=>void,
    contacts:any,
    ele:object
}

const EditContactForm = ({open,setOpen,contacts,ele}:propsCheck) => {
  
    const [ data,setData ]= useState<any>({...ele})

    console.log("edit",ele)

     const dispatch:any=useDispatch();

    const handleClose = () => {
        setOpen({open:false,ele:{}});
      };
      const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
       setData({...data,[e.target.name]:e.target.value})
      }
 const handleCreateContact=()=>{
    dispatch(EditContact(contacts,data))
     setOpen(false)
 }

  return (
     <div>
      <div style={open ? {display:"block"} : {display:"none"}}>
        <label>First Name</label><br/>
        <input type="text" name='firstName' onChange={handleChange} value={data.firstName} /><br/>
        <label>Last Name</label><br/>
        <input type="text" name='lastName' onChange={handleChange} value={data.lastName} /><br/>
        <label>Phone Number</label><br/>
        <input type="number" name='phoneNumber' onChange={handleChange} value={data.phoneNumber} /><br/>
        <button onClick={handleCreateContact}>Submit</button>
      </div>
     </div>
  )
}

export default EditContactForm