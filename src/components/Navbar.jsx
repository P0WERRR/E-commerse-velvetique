import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContect';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

   const {setShowSearch,getCartCount} = useContext(ShopContext);

  return (
    <div className='flex justify-between items-center py-5 font-medium'>
      <Link to='/'>
        <img src={assets.logo} className='w-44' alt="" />
      </Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink className='flex flex-col items-center gap-1 group' to={'/'} activeclassname='active'>
          <p>HOME</p>
          <hr className='underline' />
        </NavLink>
        <NavLink className='flex flex-col items-center gap-1 group' to={'/Collection'} activeclasscame='active'>
          <p>COLLECTION</p>
          <hr className='underline' />
        </NavLink>
        <NavLink className='flex flex-col items-center gap-1 group' to={'/About'} activeclassname='active'>
          <p>ABOUT</p>
          <hr className='underline' />
        </NavLink> 
        <NavLink className='flex flex-col items-center gap-1 group' to={'/Contact'} activeclassname='active'>
          <p>CONTACT</p>
          <hr className='underline' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img onClick={()=> setShowSearch((prev)=>!prev)} src={assets.search_icon} className='w-5 cursor-pointer ' alt="" />
        <div className='group relative'>
          <Link to={'/login'}>
                <img src={assets.profile_icon} className='w-5 cursor-pointer active:w-4.5' alt="" />
          </Link>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 '>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Link to={'/cart'} className='relative active:w-4.5'>
          <img src={assets.cart_icon} className='w-5 min-w-4.5 ' alt="" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>
        <img onClick={() => { setVisible(true) }} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
      </div>

      {/* Sidebar menu for smaller screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-[60%]' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div className='flex items-center gap-4 p-3 '>
            <img onClick={() => { setVisible(false) }} src={assets.dropdown_icon} className={`h-4  cursor-pointer `} alt="" />
            <p onClick={() => { setVisible(false) }} className='cursor-pointer'>Back</p>
          </div>
          <NavLink onClick={() => { setVisible(false) }} className='py-2 pl-6 border-b' to='/'>HOME</NavLink>
          <NavLink onClick={() => { setVisible(false) }} className='py-2 pl-6 border-b' to='/Collection'>COLLECTION</NavLink>
          <NavLink onClick={() => { setVisible(false) }} className='py-2 pl-6 border-b' to='/About'>ABOUT</NavLink>
          <NavLink onClick={() => { setVisible(false) }} className='py-2 pl-6 border-b' to='/Contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar