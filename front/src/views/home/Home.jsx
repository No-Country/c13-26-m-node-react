import React from 'react'
import Hero from '../../components/hero/Hero';
import Banner from '../../components/banner/Banner';
import { FaBoxOpen } from "react-icons/fa6";
import {FaCrown} from "react-icons/fa6";
import {FaShieldHeart} from "react-icons/fa6";

const Home = () => {
  return (
    <div className='h-full w-full my-12'>
      <Hero/>
      {/* Inicio segunda section */}
      <div className='bg-white flex items-center justify-center border-solid border border-current rounded-xl h-16 sm:h-32 sm:m-12 m-6'>
        <div className='h-8 w-20 m-3 sm:h-20 sm:w-72 flex justify-center items-center sm:me-16'>
          <FaBoxOpen className='h-6 w-8 sm:h-10 sm:w-12 m-1 sm:ms-5'/>
          <div className='w-32 h-8 sm:h-12 sm:w-48 my-2 mx-1 flex flex-col justify-center'>
            <p className='text-[8px] sm:text-xl font-medium'>Free delivery</p>
            <p className='text-[6px] sm:text-sm'>on order above $50,00</p>
          </div>
        </div>
        <div className='h-8 w-20 m-3 sm:h-20 sm:w-72 flex justify-center items-center'>
          <FaCrown className='h-6 w-8 sm:h-10 sm:w-12 m-1 sm:ms-5'/>
          <div className='w-32 h-8 sm:h-12 sm:w-48 my-2 mx-1 flex flex-col justify-center'>
            <p className='text-[8px] sm:text-xl font-medium'>Best quality </p>
            <p className='text-[6px] sm:text-sm'>best quality in low price</p>
          </div>
        </div>
        <div className='h-8 w-20 m-3 sm:h-20 sm:w-72 flex justify-center items-center sm:ms-16'>
          <FaShieldHeart className='h-6 w-8 sm:h-10 sm:w-12 m-1 sm:ms-5'/>
          <div className='w-32 h-8 sm:h-12 sm:w-48 my-2 mx-1 flex flex-col justify-center'>
            <p className='text-[8px] sm:text-xl font-medium'>1 year warranty</p>
            <p className='text-[6px] sm:text-sm'>Avaliable warranty</p>
          </div>
        </div>
      </div>
     {/* Fin segunda section */}

      <div className='border border-2 border-current h-52 sm:h-96 m-5 sm:m-10'>
        <h3>Popular products</h3> 
      </div>

      <Banner/>
    </div>
  )
}

export default Home