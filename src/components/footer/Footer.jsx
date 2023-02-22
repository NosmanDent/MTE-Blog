import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='flex flex-1 flex-col pt-16 pb-6'>
            <div className='flex flex-1 flex-row gap-x-4 ml-10 sm:text-base text-xs '>
                <a href=""><p className='hover:text-gray-500'>English</p></a>
                <a href=""><p className='hover:text-gray-500'>Deutsch </p></a>
                <a href=""><p className='hover:text-gray-500'>Italiano</p></a>
                <a href=""><p className='hover:text-gray-500'>Français</p></a>
                <a href=""><p className='hover:text-gray-500'>Español</p></a>
                <a href=""><p className='hover:text-gray-500'>日本語</p></a>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4 ml-10 mr-8 gap-x-20 '>
                <div className= ''>
                    <a href=""><p className='font-bold hover:text-gray-500 
                        border-b border-black text-xl mb-2'>Quick Links</p></a>
                    <a href=""><p className='my-4'>Home</p></a>
                    <a href=""><p className='my-4'>MTE in your country</p></a>
                    <a href=""><p className='my-4'>MTE Group Careers</p></a>
                    <a href=""><p className='my-4'>EU Detergents Regulation</p></a>
                    <a href=""><p className='my-4'>REACH Regulation</p></a>
                    <a href=""><p className='my-4'>Compatibility Check</p></a>
                    <a href=""><p className='my-4'>Software Update</p></a>
                    <a href=""><p className='my-4'>Accessories Update</p></a>
                    <a href=""><p className='my-4'>Connected Test Vehicle</p></a>
                    <a href=""><p className='my-4'>Service Page Charging Products</p></a>
                </div>

                <div>
                <a href=""><p className='font-bold hover:text-gray-500 
                        border-b border-black text-xl mb-2'>More MTE Websites</p></a>
                    <a href=""><p className='my-4'>MTE M</p></a>
                    <a href=""><p className='my-4'>MTE M Motorsport</p></a>
                    <a href=""><p className='my-4'>MTE Golfsport</p></a>
                    <a href=""><p className='my-4'>MTE M Driving Experience</p></a>
                    <a href=""><p className='my-4'>MTE Welt</p></a>
                    <a href=""><p className='my-4'>MTE Group Classic</p></a>
                    <a href=""><p className='my-4'>MTE Group</p></a>
                    <a href=""><p className='my-4'>MTE Group Culture</p></a>
                    <a href=""><p className='my-4'>MTE ConnectedDrive Upgrades</p></a>
                </div>

                <div>
                <a href=""><p className='font-bold hover:text-gray-500 
                        border-b border-black text-xl mb-2'>MTE.com</p></a>
                    <a href=""><p className='my-4'>About MTE.com</p></a>
                    <a href=""><p className='my-4'>Contact</p></a>
                    <a href=""><p className='my-4'>Cookies</p></a>
                    <a href=""><p className='my-4'>Imprint</p></a>
                    <a href=""><p className='my-4'>Legal Notice / Data protection</p></a>
                    
                    
                </div>

                <div>
                <a href=""><p className='font-bold hover:text-gray-500 
                        border-b border-black text-xl mb-2'>Visit us on</p></a>
                    <a href=""><p className='my-4'>Facebook</p></a>
                    <a href=""><p className='my-4'>Twitter</p></a>
                    <a href=""><p className='my-4'>Instagram</p></a>
                    <a href=""><p className='my-4'>Youtube</p></a>
                    
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer