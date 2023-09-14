import {FaRegUser } from "react-icons/fa";
import {AiOutlineBell } from "react-icons/ai";
import {BiBox } from "react-icons/bi";
import { useState } from "react"


const Dashboard = () => {

    const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {

		setIsOpen(!isOpen);
	}

  return (
    <section className="font-semibold font-poppins text-gray-500 text-sm
    border-[1px] border-gray-400 w-[250px] h-[500px] shadow-xl rounded-xl
    ml-24 mb-6 bg-white">
        <article className="pt-4 pl-7">
        <ul className="cursor-pointer">
            <li className='text-sm flex gap-3 leading-[55px] text-black'> <span className='pt-5 text-black'>
                    <FaRegUser/>
                </span>Personal info</li>
            <li className='text-sm flex gap-3 leading-[55px] hover:text-red-500'> <span className='pt-5'>
                    <AiOutlineBell/>
                </span>Mis pedidos</li>
            <li className='text-sm flex gap-3 leading-[55px] hover:text-red-500'> <span className='pt-5'>
                    <BiBox/>
                </span>Historial de compras</li>
            <li className='text-sm flex gap-3 leading-10 hover:text-red-500' onClick={toggleOpen}> <span className='pt-[12px]'>
                    <AiOutlineBell/>
                </span>Mi tienda</li>
        </ul>
        </article>
        {isOpen && <article className="pl-14">
        <ul className="cursor-pointer">
            <li className='text-sm flex gap-3 leading-10 hover:text-black'> <span className='pt-3'>
                    <AiOutlineBell/>
                </span>Mis productos</li>
            <li className='text-sm flex gap-3 leading-10 hover:text-black'> <span className='pt-3'>
                    <BiBox/>
                </span>Añadir productos</li>
            <li className='text-sm flex gap-3 leading-10 hover:text-black'> <span className='pt-3'>
                    <BiBox/>
                </span>Historial de ventas</li>
            <li className='text-sm flex gap-3 leading-10 hover:text-black'> <span className='pt-3'>
                    <FaRegUser/>
                </span>Ordenes</li>
        </ul>
        </article>}
        <button type='submit' className='w-28 bg-white text-gray-500 h-8 rounded-2xl 
                font-semibold text-[12px] border-gray-400 border-[1px] mt-12 ml-14 hover:bg-black hover:text-white'>
                x Log out
            </button>
    </section>
  )
}

export default Dashboard