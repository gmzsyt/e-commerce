import React from 'react'
import NavbarLeft from './navbarItem/NavbarLeft'
import NavbarRight from './navbarItem/NavbarRight'

const Navbar = ({search,setSearch}) => {
  return (
    <div className='flex items-center justify-between my-5'>
      <NavbarLeft />
      <NavbarRight search ={search} setSearch = {setSearch}/>
    </div>
  )
}

export default Navbar
