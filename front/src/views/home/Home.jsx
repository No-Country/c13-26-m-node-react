import React from 'react'
import Hero from '../../components/hero/Hero';
import Banner from '../../components/banner/Banner';
import { FaBoxOpen } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa6";
import { FaShieldHeart } from "react-icons/fa6";
import CardProduct from '../../components/cardProduct/CardProduct';

const Home = () => {
  return (
    <div className='h-full w-full'>
      <Hero />
      {/* Inicio segunda section */}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 m-6 md:m-12 p-4 border border-gray-300 rounded-xl'>
        <div className='flex justify-center items-center'>
          <FaBoxOpen className='h-12 w-12 text-primary mr-3' />
          <div>
            <p className='text-lg sm:text-base font-medium'>Publica tus productos</p>
            <p className='text-sm sm:text-xs'>vende más en menos tiempo</p>
          </div>
        </div>

        <div className='flex justify-center items-center ms-4 md:ms-0'>
          <FaCrown className='h-12 w-12 text-primary mr-3' />
          <div>
            <p className='text-lg sm:text-base font-medium'>Compra eficiente</p>
            <p className='text-sm sm:text-xs'>la mejor calidad a bajo precio</p>
          </div>
        </div>

        <div className='flex justify-center items-center me-4 md:me-0'>
          <FaShieldHeart className='h-12 w-12 text-primary mr-3' />
          <div>
            <p className='text-lg sm:text-base font-medium'>Unete a E-tech</p>
            <p className='text-sm sm:text-xs'>compra y vende con una mejor experiencia</p>
          </div>
        </div>
      </div>

      {/* Fin segunda section */}

      {/* Inicio section de productos */}
      <div className='m-5 sm:m-10'>
        <h3 className='text-[30px] mb-5'>Productos destacados</h3>
        <div className='sm:grid-rows-1 sm:grid-cols-4 sm:flex justify-around space-x-2.5'>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
      {/* Fin section de productos */}

      <Banner />

      <div className='text-center m-5 sm:m-10'>
        <h3 className='text-[30px] mb-5'>Testimonios</h3>
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