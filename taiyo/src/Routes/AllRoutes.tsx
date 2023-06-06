import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import Charts from '../Pages/Charts'
import Maps from '../Pages/MapChart'
import AddContacts from '../Pages/AddContactsPage'
import EditContactsPage from '../Pages/EditContactsPage'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />  
        <Route path='/contact/add' element={<AddContacts />} />
        <Route path='/contact/Edit/:id' element={<EditContactsPage />} />
        <Route path='/chart' element={<Charts />} />  
        <Route path='/maps' element={<Maps />} />  
    </Routes>
  )
}

export default AllRoutes