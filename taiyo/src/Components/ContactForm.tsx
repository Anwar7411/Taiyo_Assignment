import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material';

// interface contactObject{
//     firstName:String,
//     lastName:String,
//     status:string
//     }

interface propsCheck{
    open:boolean,
    setOpen:(value:boolean)=>void,
    contacts:any,
    setContacts:(value:any)=>void,
}

const ContactForm = ({open,setOpen,contacts,setContacts}:propsCheck) => {

    const [ data,setData ]= useState<any>({
        firstName: "",
        lastName: "",
        status: ""
        })

    const handleClose = () => {
        setOpen(false);
      };
      const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
       setData({...data,[e.target.name]:e.target.value})
      }
 const handleCreateContact=()=>{
    let arr=[...contacts,data]
  setContacts(arr);
  setOpen(false)
 }

  return (
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='w-100'
      >
         <Grid container className='my-2 mx-2 border-2 border-gray-300 ' spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} >
            <TextField id="outlined-basic" label="First Name" variant="outlined" className='' name='firstName' onChange={handleChange} value={data.firstName}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
            <TextField id="outlined-basic" label="Last Name" variant="outlined" name="lastName" onChange={handleChange} value={data.lastName}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
            <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="status"
        value={data.status}
        onChange={handleChange}
      >
        <FormControlLabel value="active" control={<Radio />} label="Active" />
        <FormControlLabel value="inactive" control={<Radio />} label="In-Active" />
      </RadioGroup>
    </FormControl>
            </Grid>
         </Grid>

        
          <Button onClick={handleCreateContact}>
            ADD
          </Button>
       
      </Dialog>
  )
}

export default ContactForm