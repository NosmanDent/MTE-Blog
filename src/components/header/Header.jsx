import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-1 flex-col pl-6 pr-6 mt-20 pb-16 gap-y-6'>
      <div className='flex flex-col my-4'>
        <p className='text-white sm:text-3xl text-xl font-bold'>Individual mobility</p>
        <p className='text-yellow-700 lg:text-6xl md:text-5xl 
        text-lg sm:text-4xl mt-4 leading-relaxed font-bold'>When you can't stop sheer<br/> driving pleasure</p>
        
      </div>
      <div>
        <button className='border-4 border-white py-3 px-12 text-white'>Read more</button>
      </div>
      

      
    </div>
  )
}

export default Header