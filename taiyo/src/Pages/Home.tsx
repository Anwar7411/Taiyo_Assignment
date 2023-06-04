import { useState,useEffect } from "react";

interface contactObject{
firstName:String,
lastName:String,
status:string
}

const Home = () => {
  
  const [ contacts, setContacts ] =useState<contactObject[]>([]);
  const [open, setOpen] = useState<boolean>(false)

  const handleAdd=()=>{

  }
  

  return (
    <div>
      <div>
        <button className="w-60 h-10 m-1 border-2 border-gray-300" onClick={handleAdd}>Create Contact</button>
      </div>
        {
          contacts.length>0 ? <div /> :
            <div className="w-80 h-40 border-2 border-gray-300 flex flex-row justify-center text-center content-center">
            <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShv6iU-K7lQKDMhvhbUHkyVFIkMTu3WPG8YA&usqp=CAU" alt=""  className="w-40 h-30"/></div>
            <div>No Contacts Found Please Add Contacts By Clicking Create Contact Button</div>
            </div>
        }
    </div>
  )
}

export default Home