import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { GiWorld } from 'react-icons/gi'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Form from '../form/Form'
import logo from '../../assets/logo.png'
import './navbar.css'

const Navbar = () => {
    const [toggleMenu, setToggleMunu ] = useState(false);
  return (
    <nav className=' flex flex-1'>
        <div className='sm:flex hidden flex-1  w-full text-white'>
            <div className='sm:flex flex-1 md:gap-x-6 sm:gap-x-4 sm:items-center 
                sm:justify-center font-serif pt-6 pb-2 sm:px-10 md:px-0'>
                <p className=' font-bold hover:text-gray-400 sm:text-xs md:text-base'>
                    <a href="#home">Home</a>
                </p>

                <p className=' font-bold hover:text-gray-400'>
                    <a href="#magazine">Magazine</a>
                </p>

                <p className=' font-bold hover:text-gray-400 '>
                    <a href="#blog">Blog</a>
                </p>

                <p className=' font-bold hover:text-gray-400'>
                    <a href="">Event</a>
                </p>

                <p className=' font-bold hover:text-gray-400'>
                    <a href="#carsales">Model</a>
                </p>

                <BsSearch />

                <div className='flex gap-x-2 border-l-2 border-white pl-4'>
                    <GiWorld className='font-bold text-xl'/>
                    <p className='text-xs'> MTE CAR in your Country</p>
                </div>

                <div className='pulsate-bck text-white w-20 h-20'>
                    <img src={logo} alt="logo" /> 
                </div>
            </div>

            
        </div>

     
        <div className='sm:hidden flex items-center justify-end px-6 ml-auto'>

            <div className='pulsate-bck text-white w-20 h-16 flex items-center mr-8'>
                <img src={logo} alt="logo" /> 
            </div>
            
            {toggleMenu 
                ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMunu(false)}/>  
                : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMunu(true)}/>  
                
            }
           
            

            {toggleMenu && (
            
            
            <div className="mte__navbar-menu_container bg-black scale-up-center">
                <div className='flex flex-col items-center justify-center'>
                    <div className='pulsate-bck text-white w-20 h-20'>
                        <img src={logo} alt="logo" /> 
                    </div>
                    <div className='rounded-lg'>
                        <Form />
                    </div>
                </div>

                <div className='flex flex-col gap-y-8 text-white mt-4 '>
                    <p className=' font-bold hover:text-gray-400'>
                        <a href="#home">Home</a>
                    </p>

                    <p className=' font-bold hover:text-gray-400'>
                        <a href="#magazine">Magazine</a>
                    </p>

                    <p className=' font-bold hover:text-gray-400 '>
                        <a href="#blog">Blog</a>
                    </p>

                    <p className=' font-bold hover:text-gray-400'>
                        <a href="#event">Event</a>
                    </p>

                    <p className=' font-bold hover:text-gray-400'>
                        <a href="#carsales">Model</a>
                    </p>
                </div>

                <div className='flex flex-col'>
                    <div className='flex flex-col 
                        text-sm text-white pt-10'>
                        <p> MTE in your Country</p>
                        <p className='textt-justify'>Learn more about MTE cars and model. product and services.</p>
                    </div>
                </div>

                <div className='flex mt-4'>
                    <button className='bg-orange-700 py-3 px-8'>
                        Choose Country
                    </button>
                </div>
                
                
                
            </div>
        )}
        </div>
        
    </nav>
  )
}

export default Navbar