
import {BsCartDash} from "react-icons/bs";
import {AiOutlineUser, AiOutlineMenu} from "react-icons/ai";
import {BiChevronDown} from "react-icons/bi";
import {FiSearch} from "react-icons/fi";





const Navbar = () => {
  return (
    
    <header className='bg-white text-black h-full w-full px-6 py-8 font-poppins'>
      <article className='h-full flex items-center justify-center gap-11 pb-7'>
        <button className=''
        >
          <p className=' font-bold
          text-4xl pt-[4px] pl-[2px] text-black'>E-COMMERCE</p>
          </button>

          <form
      className="flex
       gap-2 text-white text-2xl pr-5 relative"
    >
      <input
        type="text"
        className="text-lg  md:w-[560px] bg-transparent border-[2px] h-[51px] border-red-600 
        outline-none rounded-3xl px-5"
        placeholder="Search for products"
        name='search'
      />
        <button type='submit' className='absolute left-[500px] mt-4 text-xl'>
        <FiSearch className='text-black'/>
        </button>
    </form>
      <nav>
        <ul className='flex gap-5 font-semibold text-black text-[42px] pt-4'>
          <li>
            <button><AiOutlineUser/></button>
          </li>
          <li>
            <div className='relative flex gap-3'>
            <button><BsCartDash/></button>
            <div className='rounded-full bg-red-600 text-white text-xs w-5 h-5 absolute
              bottom-[25px] left-[25px]'>
              <p className='pl-[7px] pt-[2px]'>0</p>
              </div>
              <div className='text-xs text-gray-500'>
              <p>Tu carrito</p>
              <p className='text-xl'>$ 0.00</p>
            </div>
              </div>
          </li>
        </ul>
      </nav>
      </article>

      <article className='flex flex-row justify-center gap-11'>
        
        <button className='flex items-center border-[1px] border-gray-300 rounded-3xl
        justify-center w-[260px] h-12 font-light text-gray-800 gap-[75px]'>
          <div className='flex items-center gap-3'>
          <AiOutlineMenu/>
          <h2>
            Categories
          </h2>
          </div>
          <BiChevronDown className='text-xl'/>
        </button>
        <div className='pt-3 font-semibold text-gray-700'>
          <ul className='flex gap-7'>
            <li>Home</li>
            <li>Features</li>
            <li>Shortcodes</li>
            <li>Post Types</li>
            <li>Shop</li>
          </ul>
        </div>
      </article>
    </header>

  )
}

export default Navbar