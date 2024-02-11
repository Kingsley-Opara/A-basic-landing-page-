import React from 'react'

function BodySection() {
  return (
    <section className='mt-[22rem] justify-center self-center place-content-center ml-[18rem] max-md:pl-2 max-md:ml-10'>
        <p>Supported and backed by:</p>

        <div className='flex flex-col space-y-4'>
            <div className='flex space-x-3 mt-4'>
                <button className='h-10 w-24 bg-white text-black text-lg ml-[-6rem] max-md:ml-[0] max-md:h-8 max-md:w-20'>Lorem</button>
                <button className='h-10 w-24 bg-white text-black text-lg max-md:h-8 max-md:w-20'>Ipsum</button>
                <button className='h-10 w-24 bg-white text-black text-lg max-md:h-8 max-md:w-20'>Dolor</button>
                <button className='h-10 w-24 bg-white text-black text-lg max-md:h-8 max-md:w-20'>Sit</button>


            </div>
            <div className='flex space-x-3 mt-4'>
                <button className='h-10 w-24 bg-white text-black text-lg ml-[-6rem] max-md:ml-[0] max-md:h-8 max-md:w-20'>Dolor</button>
                <button className='h-10 w-24 bg-white text-black text-lg max-md:h-8 max-md:w-20'>Sit</button>
                <button className='h-10 w-24 bg-white text-black text-lg max-md:h-8 max-md:w-20'>Ipsum</button>
                <button className='h-10 w-24 bg-white text-black text-lg max-md:h-8 max-md:w-20'>Lorem</button>


            </div>

            <div className='flex flex-col mt-5 justify-center self-center place-content-center ml-[0rem]'>
                <h2 className='text-lg ml-10'>Less Code. More Product.  </h2>
                <p className='pt-1'>By using our UI kit, we make sure you only get <br /> to <span className='text-[yellow]'> focus more </span>
                     on the other things that matter
                </p>
                

            </div>

        </div>


    </section>
  )
}

export default BodySection
