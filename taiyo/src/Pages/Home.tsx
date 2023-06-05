import { useState,useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import ContactForm from "../Components/ContactForm";
import EditContactForm from "../Components/EditContactForm";
import { DeleteContact } from "../Redux/Action";

interface contactObject{
firstName:String,
lastName:String,
status:string
}

const Home = () => {
  const contacts=useSelector((store:any)=>store.contacts)
  const [open, setOpen] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<any>({open:false,ele:{}});

  const dispatch:any=useDispatch()

  const handleAdd=()=>{
     setOpen(true)
  }

  const handleEdit=(el:object)=>{
    setOpenEdit({open:true,ele:el});
  }

  const handleDelete=(el:object)=>{
    dispatch(DeleteContact(contacts,el))
  }
  

  return (
    <div className="mt-25 ">
      <div className="w-500 flex flex-col justify-center items-center text-center border-2 border-gray-300 ">
      <div className="">
        <button className="w-60 h-10 m-1 border-2 border-gray-300" onClick={handleAdd}>Create Contact</button>
      </div>
      <div>

        {
          contacts.length>0 ? <div>
            {
              contacts?.map((el:any)=>{
                 return <div className="w-5/5 border-2 border-gray-300 ">
                    <div>
                    <h6>{el.firstName}</h6>
                    <h6>{el.lastName}</h6>
                    <h6>{el.phoneNumber}</h6>
                    </div>
                    <div className="flex flex-row justify-between">
                      <button onClick={()=>handleEdit(el)} className="w-15 h-10 bg-orange-500 text-stone-300 ">Edit</button>
                      <button onClick={()=>handleDelete(el)} className="w-15 h-10 bg-orange-500 text-stone-300 ">Delete</button>
                    </div>
                  </div>
              })
            }
          </div> :
            <div className="w-120 h-40 border-2 border-gray-300 flex flex-row justify-center text-center items-center gap-4">
            <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShv6iU-K7lQKDMhvhbUHkyVFIkMTu3WPG8YA&usqp=CAU" alt=""  className="w-40 h-30"/></div>
            <div>No Contacts Found Please Add Contacts By Clicking Create Contact Button</div>
            </div>
        }
      </div>
      <ContactForm open={open} setOpen={setOpen} contacts={contacts} />
      <EditContactForm open={openEdit.open} setOpen={setOpenEdit} contacts={contacts} ele={openEdit.ele} />
      </div>
    </div>
  )
}

export default Home