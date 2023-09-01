import { BsCartDash } from "react-icons/bs";
import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import MenuCategories from "./MenuCategories";


const Navbar = () => {
  return (
    <header className="bg-white text-black h-full w-full px-6 py-8 font-poppins">
      <article className="h-full flex items-center justify-center gap-11 pb-9 flex-wrap">
        <div className="">
          <button className="">
            <p
              className=" font-bold
          text-4xl pt-[4px] pl-[2px] text-black"
            >
              E-COMMERCE
            </p>
          </button>
        </div>

      
        <div className="flex flex-row items-center gap-56 md:gap-10">
            <form
              className="flex
        gap-2 text-white text-2xl pr-5 relative"
            >
              <input
                type="text"
                className="text-lg md:w-[560px] bg-transparent border-[2px] md:h-[51px] border-red-600 
        outline-none rounded-3xl px-5 sm: w-[50px] h-[15px] hidden md:block"
                placeholder="Search for products"
                name="search"
              />
              <div className="absolute text-xl md:left-[500px] md:bottom-2">
                <button type="submit">
                  <FiSearch className="text-gray-900" />
                </button>
              </div>
            </form>
          
            <nav>
              <ul className="flex gap-5 font-semibold text-black text-[32px] pt-6 md:text-[42px]">
                <li>
                  <button>
                    <AiOutlineUser />
                  </button>
                </li>
                <li>
                  <div className="relative flex md:gap-3">
                    <button>
                      <BsCartDash />
                    </button>
                    <div
                      className="rounded-full  bg-red-600 text-white text-xs w-5 h-5 absolute
              bottom-[26px] left-[25px]"
                    >
                      <p className="pl-[7px] pt-[2px]">0</p>
                    </div>
                    <div className=" text-xs text-gray-500 hidden md:block">
                      <p>Tu carrito</p>
                      <p
                        className="text-xl"
                      >
                        $ 0.00
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
        </div>
      </article>

      <article className="flex flex-row justify-center h-[2px] gap-5 items-center md:gap-11">
        <div className="flex items-center md:gap-8">
          <button
            className="md:flex items-center md:border-[1px] md: border-gray-300 rounded-3xl
        justify-center w-[260px] h-12 font-light text-gray-800 gap-[75px]"
          >
            <div className="flex items-center gap-3">
              <AiOutlineMenu />
              <h2>Categories</h2>
            </div>
            <BiChevronDown className="text-xl hidden md:block" />
          </button>
          
        
        <div className="md:hidden flex gap-2">
          <h3>Menu</h3>
          <span className="pt-1">
            <AiOutlineMenu />
          </span>
        </div>

        <div className="md:pt-3 font-semibold text-gray-700 ">
          <ul className="md:flex gap-7 sm: hidden">
            <li>Home</li>
            <li>Features</li>
            <li>Shortcodes</li>
            <li>Post Types</li>
            <li>Shop</li>
          </ul>
        </div>
        </div>
      </article>
      <div>
        <MenuCategories/>
      </div>
    </header>
  );
};

export default Navbar;
