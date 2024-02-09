import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import GitHubIcon from '@mui/icons-material/GitHub';

function Hero() {
  return (
    <>
      <div className='flex justify-center place-content-center flex-col self-center align-middle mt-28'>
        <p className='text-3xl mt-10'>It doesn't matter what <span className='text-[yellow]'>JS</span></p>
        <p className='text-3xl mt-1'><span className='text-[yellow]'>Framework</span> you work with</p>
        <p className='pl-5 mt-2'>Our biolerplates works with it <span className='text-blue-300'>out of the box</span></p>
      </div>
      <div className='flex justify-center self-center place-content-center pt-4 space-x-4'>
        <button className = 'pl-5 h-12 w-[10rem] rounded-md bg-[yellow] text-black'>Get Started <ArrowRightAltIcon/> </button>
        <button className = 'pl-5 h-12 w-[10rem] rounded-md bg-black text-[yellow] border-[yellow] ring-2 ring-[yellow]'>See repo <GitHubIcon/> </button>
      </div>
    </>
 
  )
}

export default Hero
