import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai';

const CardProduct = () => {
  return (
    <div className=''>
      <article className='bg-white rounded-[20px] h-[630px] shadow-md'>
        <figure className='p-5'>
          <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1692627425/iPhone12PromaxGrafito_byckia.png" alt="Imagen producto" className='w-[300px]'/>
        </figure>
        <div className='p-5'>
          <p className='text-black opacity-80 text-center text-base'>Celulares, Apple</p>
          <h2 className='text-black text-center text-xl py-2 font-semibold'>iPhone 12 Pro Max</h2>
          <p className='text-black text-center text-xl font-semibold'>$500.00</p>
        </div>
        <div>
          <div className='[&>p]:text-yellow-500 flex justify-center items-center py-3'>
            <p className=""><AiFillStar/></p>
            <p className=""><AiFillStar/></p>
            <p className=""><AiFillStar/></p>
            <p className=""><AiFillStar/></p>
            <p className=""><AiFillStar/></p>
          </div>
          <div className='py-6 flex justify-center items-center'>
            <button className='flex justify-center items-center gap-2 bg-transparent text-black border-2 border-gray-300 cursor-pointer hover:border-black duration-300 rounded-[20px]'>
              <AiOutlineShoppingCart className='text-2xl flex justify-center items-center'/>
              <p className='text-center text-lg'>Añadir al carrito</p>
            </button>
          </div>
        </div>
      </article>
    </div>
  )
}

export default CardProduct