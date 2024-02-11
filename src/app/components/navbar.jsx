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
    <nav className='flex space-x- justify-between relative'>
        <ul>
            <li><a href="" className='text-xl pl-10 md:pl-24'>JustAnotherUIKit</a></li>
        </ul>
        <ul className='hidden pr-24 space-x-8 md:flex'>
            <li><a href="" className='' >Home</a></li>
            <li><a href="#about" className='' >About</a></li>
            <li><a href="#contact" className='' >Contact</a></li>
            <li><a href="" className='' >Blog</a></li>
        </ul>
        <div className='hidden max-md:flex max-md:pr-10'>
            {!showNavbar && <MenuIcon className='cursor-pointer' onClick = {()=>{show()}}/>}
            {showNavbar && <CloseIcon className='cursor-pointer' onClick = {() => {show()}}/>}               

        </div>
        { 
            showNavbar && 
            <div className='hidden max-md:flex flex-col absolute items-center top-10 left-[8rem] bg-white text-black w-[200px] h-[210px]'>
                <ul className='pt-5 flex flex-col space-y-7'>
                    <li><a href="" className='hover:text-blue-300' >Home</a></li>
                    <li><a href="#about" className='hover:text-blue-300' >About</a></li>
                    <li><a href="#contact" className='hover:text-blue-300' >Contact</a></li>
                    <li><a href="" className='hover:text-blue-300' >Blog</a></li>
                </ul>

            </div>
        }
        

      
    </nav>
  )
}

export default Navbar
