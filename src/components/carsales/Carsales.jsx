import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import './carsales.css'

const Carsales = (props) => {
  return (
    <div className='m-4'>
        <div className=' '>
            <img src={`../../../images/${props.img}`} className="carsales__img" alt='car-sales' />
            <div className='flex flex-1 flex-row items-center justify-end  border bg-white text-end font-bold py-2 px-4'>
            <AiOutlineArrowRight />
            <a href=""><p className='ml-1'>{props.text}</p></a>
            </div>
            
        </div>
    </div>
  )
}

export default Carsales