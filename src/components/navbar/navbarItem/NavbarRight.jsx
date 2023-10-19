import React from 'react'
import {BiSearch} from "react-icons/bi"
import {AiOutlineHeart} from "react-icons/ai"
import {SlBasket} from "react-icons/sl"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
 

const NavbarRight = () => {
  

  const navigate = useNavigate();
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  return (
    <div className='flex items-center gap-8'>
      <div className='flex items-center border p-3 rounded-full bg-gray-200'>
      <input className= " bg-gray-200 h-5 w-80 outline-none cursor-pointer hover:text-gray-700" type='text' placeholder='Arama Yapınız...'/>
      <BiSearch size={28} />
      </div>
      <AiOutlineHeart size={28}/>
      <div className='relative cursor-pointer hover:text-gray-700' onClick={()=>navigate("/cart ")}>
        <div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>{totalQuantity}</div>
        <SlBasket size={28} />
      </div>
    </div>
    
  )
}

export default NavbarRight
