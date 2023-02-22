import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import './gallary.css'

const Gallary = () => {
  
  return (
    <div>

      <div className='flex flex-1 flex-col items-center justify-center text-center mt-16'>
        <p className='text-black lg:text-4xl md:text-3xl sm:text-2xl text-xl  font-serif '>MTE in your country</p>
        <p className='text-black xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-serif font-bold'>DIFFERENT MODELS OF CARS</p>
        <div className='flex flex-row items-center gap-x-2 text-black md:text-3xl sm:text-2xl text-xl font-bold font-serif'>
          <span>
            <AiOutlineArrowRight />
          </span>

          CHOOSE YOUR CAR
        </div>
      </div>

      
    </div>
  )
}

export default Gallary