import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContect'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
    const {search,setSearch ,showSearch,setShowSearch} = useContext(ShopContext)
    const [visible,setVisible] = useState(false);
    const location = useLocation();


   useEffect( () => {
        if(location.pathname.includes('Collection') ){
            setVisible(true);
        }
        else{
            setVisible(false);
        }
   } )

    return showSearch && visible ?  (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-2 rounded-full w-3/4 sm:w-1/2'>
            <input value={search} onChange={ (e)=>setSearch(e.target.value)} type="text" className='flex-1 outline-none bg-inherit text-sm' placeholder='Search' />

        </div>
        <img src={assets.search_icon} className='inline w-4' alt="" />
        <img onClick={()=>setShowSearch(false)} src={assets.cross_icon} className='inline w-3 mx-4 cursor-pointer' alt="" />

    </div>
  ): null
}

export default SearchBar