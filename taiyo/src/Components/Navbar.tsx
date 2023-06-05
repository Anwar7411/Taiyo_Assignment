import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='mx-10 flex flex-row gap-7'>
        <Link to="/"><div>Contacts</div></Link>
        <Link to="/chart"><div>Chart</div></Link>
        <Link to="/maps"><div>Maps</div></Link>
    </div>
  )
}

export default Navbar