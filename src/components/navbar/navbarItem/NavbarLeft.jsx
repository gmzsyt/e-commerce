import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavbarLeft = () => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate("/")} className='text-6xl cursor-pointer hover:text-gray-700 '>
      Shopier 
    </div>
  )
}

export default NavbarLeft
