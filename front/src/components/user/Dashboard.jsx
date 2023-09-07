import {FaRegUser } from "react-icons/fa";
import {AiOutlineBell } from "react-icons/ai";
import {BiBox } from "react-icons/bi";
const Dashboard = () => {
  return (
    <section className="font-semibold font-poppins text-gray-500 text-sm
    border-[1px] border-gray-400 w-[250px] h-[700px] shadow-xl rounded-xl
    ml-24 mb-6">
        <article className="pt-4 pl-7">
        <ul>
            <li className='text-sm flex gap-3 leading-[55px] text-black'> <span className='pt-5 text-black'>
                    <FaRegUser/>
                </span>Personal info</li>
            <li className='text-sm flex gap-3 leading-[55px]'> <span className='pt-5'>
                    <AiOutlineBell/>
                </span>Mis pedidos</li>
            <li className='text-sm flex gap-3 leading-[55px]'> <span className='pt-5'>
                    <BiBox/>
                </span>Historial de compras</li>
            <li className='text-sm flex gap-3 leading-10'> <span className='pt-[12px]'>
                    <AiOutlineBell/>
                </span>Mi tienda</li>
        </ul>
        </article>
        <article className="pl-14">
        <ul>
            <li className='text-sm flex gap-3 leading-10'> <span className='pt-3'>
                    <AiOutlineBell/>
                </span>Mis productos</li>
            <li className='text-sm flex gap-3 leading-10'> <span className='pt-3'>
                    <BiBox/>
                </span>Añadir productos</li>
            <li className='text-sm flex gap-3 leading-10'> <span className='pt-3'>
                    <BiBox/>
                </span>Historial de ventas</li>
            <li className='text-sm flex gap-3 leading-10'> <span className='pt-3'>
                    <FaRegUser/>
                </span>Ordenes</li>
        </ul>
        </article>
        <button type='submit' className='w-28 bg-white text-gray-500 h-8 rounded-2xl 
                font-semibold text-[12px] border-gray-400 border-[1px] mt-60 ml-14'>
                x Log out
            </button>
    </section>
  )
}

export default Dashboard