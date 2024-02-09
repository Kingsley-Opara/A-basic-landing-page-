import React from 'react'

function BodySection() {
  return (
    <section className='mt-[22rem] justify-center self-center place-content-center ml-[18rem] max-md:ml-4'>
        <p>Supported and backed by:</p>

        <div className='flex flex-col space-y-4'>
            <div className='flex space-x-3 mt-4'>
                <button className='h-10 w-24 bg-white text-black text-lg ml-[-6rem] max-md:ml-[0]'>Lorem</button>
                <button className='h-10 w-24 bg-white text-black text-lg'>Ipsum</button>
                <button className='h-10 w-24 bg-white text-black text-lg'>Dolor</button>
                <button className='h-10 w-24 bg-white text-black text-lg'>Sit</button>


            </div>
            <div className='flex space-x-3 mt-4'>
                <button className='h-10 w-24 bg-white text-black text-lg ml-[-6rem] max-md:ml-[0]'>Dolor</button>
                <button className='h-10 w-24 bg-white text-black text-lg'>Sit</button>
                <button className='h-10 w-24 bg-white text-black text-lg'>Ipsum</button>
                <button className='h-10 w-24 bg-white text-black text-lg'>Lorem</button>


            </div>

            <div className='flex flex-col mt-5 justify-center self-center place-content-center ml-[0rem]'>
                <h2 className='text-lg'>Less Code. More Product.  </h2>
                <p className='pt-1'>By using our UI kit, we make sure you only get to <span className='text-[yellow]'> focus more </span>
                    <br />  on the other things that matter
                </p>
                

            </div>

        </div>


    </section>
  )
}

export default BodySection
