import React from 'react'
import {GiNewspaper} from 'react-icons/gi'

const Hero = () => {
  return (
    <div className='grid sm:grid-cols-2 grid-cols-1 m-1'>
        
        <div className='hero__bg_1 pt-24 pl-6 flex flex-col gap-y-4 pb-24 sm:mr-1 sm:mb-0 mb-1'>

            <div className='text-white flex flex-1 items-center 
                justify-start xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl gap-x-3 '>
                <GiNewspaper />
                <p>BEE MY GUEST</p>
            </div>

            <div className='gap-y-3'>
                <p className='text-white xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl'>News about humans and machines</p>
                <a href="">
                    <button className='border-4 border-white py-3 px-8 mt-3 text-white'>Read more</button>
                </a> 
            </div>
            
        </div>

        <div className='hero__bg_2 pt-24 pl-6 flex flex-col gap-y-4 pb-24'>
            <p className='xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-white'>Car Photographer</p>
            <p className='text-white xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl'>Anna Haupel: Always woving</p>
            <a href="">
                <button className='border-4 border-white py-3 mt-12 text-white w-40'>Read more</button>
            </a>
        </div>
    </div>
    
  )
}

export default Hero