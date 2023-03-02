import React from 'react'
import car3 from '../../assets/car3.jpg'

const Magazine = () => {
  return (
    <div className='lg:mx-56 md:mx-32 sm:mx-32 mx-20 mt-16 flex flex-1 flex-col items-center justify-center pb-10' id='magazine'>
        <div >
            <img src={car3} alt="" />
        </div>

        <p className='md:text-4xl sm:text-3xl text-2xl font-mono mt-6'>MTE PRESENT</p>
        <p className='md:text-6xl sm:text-4xl text-2xl font-mono mt-6'>Barlico Frankie</p>
        <a href=""> <button className='border-4 border-black py-3 px-10 mt-6'>Order Now</button> </a>
    </div>
  )
}

export default Magazine