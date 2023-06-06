import { useState,useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { DeleteContact } from "../Redux/Action";
import { useNavigate} from 'react-router-dom';
import './Home.css'

const Home = () => {
  const contacts=useSelector((store:any)=>store.contacts)
  const navigate=useNavigate();


  const dispatch:any=useDispatch()

  const handleAdd=()=>{
  navigate("/contact/add")
  }

  const handleEdit=(el:any)=>{
    navigate(`/contact/Edit/${el.id}`)
  }

  const handleDelete=(el:object)=>{
    dispatch(DeleteContact(contacts,el))
  }
  

  return (
      <div className="home_container">
      <div className="create_contact_button">
        <button onClick={handleAdd}>Create Contact</button>
      </div>
      <div  >

        {
          contacts.length>0 ? <div className="contact_div">
            {
              contacts?.map((el:any)=>{
                 return <div className="contact_card">
                    <div className="contact_info">
                    <h6>First Name : {el.firstName}</h6>
                    <h6>Last Name : {el.lastName}</h6>
                    <h6>Phone Number : {el.phoneNumber}</h6>
                    </div>
                    <div className="contact_button">
                      <button onClick={()=>handleEdit(el)} className="">Edit</button>
                      <button onClick={()=>handleDelete(el)} className="">Delete</button>
                    </div>
                  </div>
              })
            }
          </div> :
            <div className="error_div">
            <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShv6iU-K7lQKDMhvhbUHkyVFIkMTu3WPG8YA&usqp=CAU" alt=""  className="w-40 h-30"/></div>
            <div className="error_text">No Contacts Found Please Add Contacts By Clicking Create Contact Button</div>
          </div>
        }
      </div>
      </div>
  )
}

export default Home