import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import {useAppContext} from "../../AppContext/AppContext"
function NavbarOwner() {
    const {user}=useAppContext();
  return (
    <div className='flex items-center justify-between px-6 md:px-10 text-gray-500 border-b border-gray-300 relative transition-all pt-2 pb-2'>
      <Link to='/'>
      <img src={assets.logo} alt=""className=' h-7' />
      </Link>
      <p>Welcome,{user?.name || "owner"}</p>
    </div>
  )
}

export default NavbarOwner
