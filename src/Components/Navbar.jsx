import React from 'react'
import {NavLink} from  'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-4 place-content-evenly '>
      <div className='text-2xl'>
      <NavLink to='/' >
        Home
      </NavLink>
      </div>
       <div className='text-2xl'>
       <NavLink to='/pastes'>
        Pastes
      </NavLink>
       </div>
    </div>
  )
}

export default Navbar
