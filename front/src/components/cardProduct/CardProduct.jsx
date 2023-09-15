import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const CardProduct = () => {
  return (

    <Link to={`/detail`}>
    <div className='shadow-md mb-4'>
      <article className='bg-white rounded-[20px] h-[520px] shadow-md'>
        <figure className='px-5 pt-5 w-full flex justify-center items-center'>
          <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1692627425/iPhone12PromaxGrafito_byckia.png" alt="Imagen producto" className='w-[250px]'/>
        </figure>
        <div className='p-5'>
          <p className='text-black opacity-80 text-center text-sm'>Celulares, Apple</p>
          <h2 className='text-black text-center text-lg py-2 font-semibold'>iPhone 12 Pro Max</h2>
          <p className='text-black text-center text-lg font-semibold'>$500.00</p>
        </div>
        <div className='[&>p]:text-yellow-500 flex justify-center items-center pb-3'>
          <p className=""><AiFillStar/></p>
          <p className=""><AiFillStar/></p>
          <p className=""><AiFillStar/></p>
          <p className=""><AiFillStar/></p>
          <p className=""><AiFillStar/></p>
        </div>
        <div className='py-3 flex justify-center items-center'>
          <button className='flex justify-center items-center gap-2 px-2 py-2 bg-transparent text-black border-2 border-gray-300 cursor-pointer hover:border-black duration-300 rounded-xl'>
            <AiOutlineShoppingCart className='text-xl flex justify-center items-center'/>
            <p className='text-center text-base'>Añadir al carrito</p>
          </button>
        </div>
      </article>
    </div>
    </Link>
  )
}

export default CardProduct