import React from 'react'

function Contact() {
  return (
    <>
        <section id='contact'>
            <h2 className = "mt-16 text-2xl pr-24 pl-24 ">Contact</h2>
            <div className = 'mt-1 justify-center self-center place-content-center pb-12 flex flex-col items-center'>
                <form>
                    <div className = 'flex flex-col justify-center self-center place-content-center align-middle space-y-6'>
                        <div className = "flex space-x-4">
                            <input type = 'text' className = "h-3 w-[22rem] text-white bg-[#D3D3D3] p-5 max-md:w-[10rem]" placeholder = "First Name"/>
                            <input type = 'text' className = "h-3 w-[22rem] text-white bg-[#D3D3D3] p-5 max-md:w-[10rem]" 
                            placeholder = "Last Name"/>
                        </div>
                        <div>
                            <input type = 'text' className = "h-3 w-[46rem] text-white bg-[#D3D3D3] p-5 max-md:w-[18rem]" 
                            placeholder = "First Name"/>
                        </div>
                        <div>
                            <input type = 'text' className = "h-3 w-[46rem] text-white bg-[#D3D3D3] p-5 max-md:w-[18rem]" 
                            placeholder = "Phone (Optional)"/>
                        </div>
                        <div>
                            <textarea rows="7" cols="50" placeholder = "Message" className = 'w-[45rem] p-5 max-md:w-[18rem] bg-[#D3D3D3]'></textarea>
                        </div>

                        <button className = 'pl-5 h-12 w-[14rem] rounded-md bg-[yellow] text-black bg-blue-300 ml-[12rem] max-md:ml-10'>Send</button>


                    </div>
                </form>

            
            </div>
        </section>
    </>
  )
}

export default Contact
