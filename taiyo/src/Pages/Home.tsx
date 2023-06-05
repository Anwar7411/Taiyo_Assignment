import { useState,useEffect } from "react";
import ContactForm from "../Components/ContactForm";

interface contactObject{
firstName:String,
lastName:String,
status:string
}

const Home = () => {
  
  const [ contacts, setContacts ] =useState<any>([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleAdd=()=>{
     setOpen(true)
  }
  

  return (
    <div>
      <div>
        <button className="w-60 h-10 m-1 border-2 border-gray-300" onClick={handleAdd}>Create Contact</button>
      </div>
      <div>

        {
          contacts.length>0 ? <div>
            {
              contacts?.map((el:any)=>{
                 return <div>
                    <div>
                    <h6>{el.firstName}</h6>
                    <h6>{el.lastName}</h6>
                    </div>
                    <div>
                      <button>Edit</button>
                      <button>Delete</button>
                    </div>
                  </div>
              })
            }
          </div> :
            <div className="w-80 h-40 border-2 border-gray-300 flex flex-row justify-center text-center content-center">
            <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShv6iU-K7lQKDMhvhbUHkyVFIkMTu3WPG8YA&usqp=CAU" alt=""  className="w-40 h-30"/></div>
            <div>No Contacts Found Please Add Contacts By Clicking Create Contact Button</div>
            </div>
        }
      </div>
      <ContactForm open={open} setOpen={setOpen} contacts={contacts} setContacts={setContacts}/>
    </div>
  )
}

export default Home