import React from 'react'
import Hero from '../../components/hero/Hero';
import Banner from '../../components/banner/Banner';
import { FaBoxOpen } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa6";
import { FaShieldHeart } from "react-icons/fa6";

const Home = () => {
  return (
    <div className='h-full w-full'>
      <Hero />
      {/* Inicio segunda section */}
      <div className='grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 justify-around items-center border-solid border border-current rounded-xl h-full sm:m-12 m-6'>
        
        <div className='h-full w-full m-2 sm:h-20 sm:w-72 flex justify-center items-center'>
          <FaBoxOpen className='h-20 w-20 sm:h-10 sm:w-12 m-2' />
          <div className='w-full h-full sm:h-12 sm:w-48  flex flex-col justify-center'>
            <p className='text-xl sm:text-xl font-medium'>Free delivery</p>
            <p className='text-sm sm:text-sm'>on order above $50,00</p>
          </div>
        </div>
        
        <div className='h-full w-full m-2 sm:h-20 sm:w-72 flex justify-center items-center'>
          <FaCrown className='h-20 w-20 sm:h-10 sm:w-12 m-2' />
          <div className='w-full h-full sm:h-12 sm:w-48 flex flex-col justify-center'>
            <p className='text-xl sm:text-xl font-medium'>Best quality </p>
            <p className='text-sm sm:text-sm'>best quality in low price</p>
          </div>
        </div>
        
        <div className='h-full w-full m-2 sm:h-20 sm:w-72 flex justify-center items-center'>
          <FaShieldHeart className='h-20 w-20 sm:h-10 sm:w-12 m-2' />
          <div className='w-full h-full sm:h-12 sm:w-48 flex flex-col justify-center'>
            <p className='text-xl sm:text-xl font-medium'>1 year warranty</p>
            <p className='text-sm sm:text-sm'>Avaliable warranty</p>
          </div>
        </div>
      </div>
      {/* Fin segunda section */}

      <div className='border border-2 border-current h-52 sm:h-96 m-5 sm:m-10'>
        <h3>Popular products</h3>
      </div>

      <Banner />

      <div className='text-center m-5 sm:m-10'>
        <h3 className='text-[40px] mb-5'>Testimonios</h3>
        <div className='grid sm:flex items-center justify-center sm:my-6'>
          <div className="h-full flex flex-col items-center justify-center rounded-xl mb-6 sm:mb-0 sm:mx-2 text-center bg-white border-solid border border-current w-full sm:w-4/12">
            <div className="mb-2 rounded-t-xl flex items-center h-full w-full bg-gray-200 text-black font-light">
              <p className="p-5 rounded-xl">"Si linguis hominum loquar, et angelorum, caritatem autem non habeam, factus sum velut æs sonans, aut cymbalum tinniens. Et si habuero prophetiam, et noverim mysteria omnia, et omnem scientiam."</p>
            </div>
            <div className="flex items-center justify-center space-x-6 m-3">
              <img className="rounded-full w-14 h-14" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <h5>Bonnie Green</h5>
                <p className="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</p>
              </div>
            </div>
          </div>

          <div className="h-full flex flex-col items-center justify-center rounded-xl mb-3 sm:my-0 sm:mx-2 text-center bg-white border-solid border border-current w-full sm:w-4/12">
            <div className="mb-2 rounded-t-xl flex items-center h-full w-full bg-gray-200 text-black font-light">
              <p className="p-5 rounded-xl">"Si linguis hominum loquar, et angelorum, caritatem autem non habeam, factus sum velut æs sonans, aut cymbalum tinniens. Et si habuero prophetiam, et noverim mysteria omnia, et omnem scientiam."</p>
            </div>
            <div className="flex items-center justify-center space-x-6 m-3">
              <img className="rounded-full w-14 h-14" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <h5>Bonnie Green</h5>
                <p className="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</p>
              </div>
            </div>
          </div>

          <div className="h-full flex flex-col items-center justify-center rounded-xl sm:mt-0 sm:mx-2 text-center bg-white border-solid border border-current w-full sm:w-4/12">
            <div className="mb-2 rounded-t-xl flex items-center h-full w-full bg-gray-200 text-black font-light">
              <p className="p-5 rounded-xl">"Si linguis hominum loquar, et angelorum, caritatem autem non habeam, factus sum velut æs sonans, aut cymbalum tinniens. Et si habuero prophetiam, et noverim mysteria omnia, et omnem scientiam."</p>
            </div>
            <div className="flex items-center justify-center space-x-6 m-3">
              <img className="rounded-full w-14 h-14" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <h5>Bonnie Green</h5>
                <p className="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home