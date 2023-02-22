import { useState } from 'react'
import { Navbar, Header, Hero, Magazine, Blog, Gallary, Carsales, Footer } from './components';
import data from './components/carsales/data'


import './App.css'

export default function App() {

  const carsales = data.map(item => {
    return (
        <Carsales 
          key={item.id}
          img={item.image}
          text={item.text}
            
        />
    )
})  
  return (
    <>
      <div className="app__bg slide-bck-center">
        <Navbar />
        <Header />
      </div>
      <Hero />
      <Magazine />
      <Blog />
      <Gallary />
      <section className='flex flex-1 flex-wrap items-center justify-center mt-4 bg-black'>
        {carsales}
      </section>
      <Footer />
      


    
    </>
    
    
  )
}