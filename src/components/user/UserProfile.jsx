
import {FaRegUser } from "react-icons/fa";
import { useState } from "react"
import Dashboard from "./Dashboard";

const UserProfile = () => {

    const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {

		setIsOpen(!isOpen);
	}

  return (

    <main className='bg-white text-black min-h-screen flex justify-center 
    items-center flex-col font-poppins py-14 relative'>

        <div className="flex justify-center items-center gap-5 md:gap-28">
            <h2 className="text-2xl font-bold md:text-3xl">
                Información personal
            </h2>
            <button className="w-14 h-14 bg-gray-200 text-black
         flex justify-center items-center rounded-md mt-4 md:w-24 md:h-24" onClick={toggleOpen}>
              <FaRegUser className="text-4xl text-gray-700"/>
            </button>
        </div>
        {isOpen &&<div className="absolute top-[165px] pl-64"> 
            <Dashboard/>
        </div>}

        <form className=' bg-white mb-5'>
            <h3 className="pt-3 pl-3 font-semibold text-center md:text-left">Información de la cuenta</h3>

            <div className="flex flex-row justify-center flex-wrap gap-4">
            <div className=' h-10 w-60 rounded-lg flex items-center px-4 my-6
            border-gray-300 border-2'>
                <input type="text" 
                name='name'
                placeholder='Name' 
                className='outline-none'/>
            </div>
            <div className='h-10 w-60 rounded-lg flex items-center px-4 my-6
            border-gray-300 border-2'>
                <input type="password"
                name='name' 
                placeholder='Last name' 
                className='outline-none'/>
            </div>
            </div>

            <div className="flex flex-row justify-center flex-wrap gap-4">
            <div className=' h-10 w-60 rounded-lg flex items-center px-4 my-6
            border-gray-300 border-2'>
                <input type="text" 
                name='phone'
                placeholder='Phone number' 
                className='outline-none'/>
            </div>
            <div className='h-10 w-60 rounded-lg flex items-center px-4 my-6
            border-gray-300 border-2'>
                <input type="email"
                name='email' 
                placeholder='Email@email.com' 
                className='outline-none'/>
            </div>
            </div>

            <div className='h-10 w-72 rounded-lg flex items-center px-4 my-6
            border-gray-300 border-2 md:w-[500px] ml-12 md:ml-0'>
                <input type="text"
                name='email' 
                placeholder='Your adress' 
                className='outline-none'/>
            </div>
            
            <h3 className=" font-semibold text-center md:text-left">Actualizar contraseña</h3>
            <div className="flex flex-row flex-wrap gap-4 px-3 md:gap-40 md:px-0">
                <div className='h-10 w-[200px] rounded-lg flex items-center px-4 my-6
            border-gray-300 border-2 md:w-[215px]'>
                <input type="password"
                name='email' 
                placeholder='Password' 
                className='outline-none'/>
            </div>
            <button type='submit' className='w-32 bg-white text-[12px] h-8 rounded-2xl 
                font-semibold mt-8 border-[1px] text-gray-800 border-gray-400'>
                Update password
            </button>
            </div>
 
            <div className="flex gap-3 justify-center md:justify-start">
            <button type='submit' className='w-28 bg-black text-white text-[12px] h-8 rounded-2xl 
                font-semibold mt-8'>
                Update profile
            </button>
            <button type='submit' className='w-28 bg-white text-gray-500 h-8 rounded-2xl 
                font-semibold mt-8 text-[12px] border-gray-400 border-[1px]'>
                x Clear all
            </button>
            </div>
        </form>
        
    </main>
  )
}

export default UserProfile