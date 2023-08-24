import React from 'react'
import {BsCartDash} from "react-icons/bs";
import {AiOutlineUser} from "react-icons/ai";



const Navbar = () => {
  return (
    
    <header className='bg-white text-black h-20 w-full px-4 border-b-2'>
      <div className='h-full flex items-center justify-between'>
        <button className=''
        >
          <p className=' font-bold
          text-[17px] pt-[4px] pl-[2px] text-black'>E-COMMERCE</p>
          </button>

          <form
      className="flex
       gap-2 text-white text-2xl pr-5"
    >
   

      <input
        type="text"
        className="text-xl w-28 md:w-[200px] bg-transparent border-[1px] border-red-600 
        outline-none rounded-xl p-1"
        placeholder="Search"
        name='search'
        
      />
    </form>
      <nav>
        <ul className='flex gap-5 font-semibold text-[30px] text-black'>
          <li>
            <AiOutlineUser/>
          </li>
          <li>
            <BsCartDash/>
          </li>
        </ul>
      </nav>
      </div>
    </header>

  )
}

export default Navbar