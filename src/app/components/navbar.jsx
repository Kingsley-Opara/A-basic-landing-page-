import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';


function Navbar() {

    const [showNavbar, setShowNavbar] = useState(false)

    const show = () =>{
        setShowNavbar(!showNavbar)
        console.log(showNavbar)
    }
  return (
    <nav className='flex space-x- justify-between'>
        <ul>
            <li><a href="" className='text-xl pl-10 md:pl-24'>JustAnotherUIKit</a></li>
        </ul>
        <ul className='hidden pr-24 space-x-8 md:flex'>
            <li><a href="" className='' >Home</a></li>
            <li><a href="" className='' >About</a></li>
            <li><a href="" className='' >Contact</a></li>
            <li><a href="" className='' >Blog</a></li>
        </ul>
        <div className='hidden max-md:flex max-md:pr-10'>
            {!showNavbar && <MenuIcon className='cursor-pointer' onClick = {()=>{show()}}/>}
            {showNavbar && <CloseIcon className='cursor-pointer' onClick = {() => {show()}}/>}               

        </div>
        

      
    </nav>
  )
}

export default Navbar
