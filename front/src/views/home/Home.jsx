import React from 'react'
import Hero from '../../components/hero/Hero'

const Home = () => {
  return (
    <div className='h-screen my-12'>
      <Hero/>
      <div className='bg-white border-solid border border-current rounded-xl h-16 sm:h-24 sm:m-12 m-6'>
        Hola
      </div>
    </div>
  )
}

export default Home