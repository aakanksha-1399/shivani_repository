import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-100 shadow-md">
        <NavLink to ='/' className= "w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="text-2xl  bg-gradient-to-t from-blue-700 to-blue-300 text-transparent bg-clip-text"> SP</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            
           <NavLink to = "/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}> About </NavLink>

           <NavLink to = "/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}> Projects </NavLink>
        </nav>
    </header>
  )
}

export default Navbar