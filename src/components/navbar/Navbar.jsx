
import { BsCartDash } from "react-icons/bs"
import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai"
import { BiChevronDown } from "react-icons/bi"
import { FiSearch } from "react-icons/fi"
import { Link } from "react-router-dom"
import { useState } from "react"
import MenuCategories from "./MenuCategories"
import Swal from "sweetalert2"
import { useNavigate } from 'react-router-dom';



const Navbar = () => {

	const navigate = useNavigate();  

	const handleSubmit = (e) => {
        e.preventDefault();
		const search = e.target.search.value.trim();
		console.log(search);

		if (search.length === 0) {
            Swal.fire('Ingrese un producto');
        } else if (search.length <4) {
          Swal.fire('Ingrese cuatro caracteres');
        }else{
          e.target.search.value = '';
          navigate(`/results?search=${search}`);
        }
	}

	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {

		setIsOpen(!isOpen);
	}

	

	return (

		<header className="bg-black text-white h-full w-full px-6 py-12 font-poppins border-b-[1px]
		 border-gray-400">
			<article className="h-full flex items-center justify-center gap-11 pb-9 flex-wrap">
				<div>
					<button>
						<p
							className=" font-bold
          text-4xl pt-[4px] pl-[2px] text-white"
						>
						<Link to='/'>E-TECH</Link>	
						</p>
					</button>
				</div>

				<div className="flex flex-row items-center gap-56 md:gap-10">
					<form
						className="flex text-white
        gap-2  text-2xl pr-5 relative" onSubmit={handleSubmit}
					>
						<input
							type="text"
							className="text-lg md:w-[560px] bg-transparent border-[2px] md:h-[51px] border-gray-300 
        outline-none rounded-3xl px-5 sm: w-[50px] h-[15px] hidden md:block"
							placeholder="Search for products"
							name="search"
						/>
						<div className="absolute text-xl md:left-[500px] md:bottom-2">
							<button type="submit">
								<FiSearch className="text-white" />
							</button>
						</div>
					</form>

					<nav>
						<ul className="flex gap-5 font-semibold text-white text-[32px] pt-6 md:text-[42px] md: pb-4">
							<li>
								<Link to="/userDashboard">
									<AiOutlineUser />
								</Link>
							</li>
							<li>
								<Link to="/cart">
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
											<p className="text-xl">$ 0.00</p>
										</div>
									</div>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</article>

			<article className="flex flex-row justify-center h-[2px] gap-5 items-center md:gap-11 relative">
				<div className="flex items-center md:gap-8">
					<button
						className="md:flex items-center md:border-[1px] md: border-gray-300 rounded-3xl
        justify-center w-[260px] h-12 font-light text-white gap-[75px]" onClick={toggleOpen} 
					>
						<div className="flex items-center gap-3" >
							<AiOutlineMenu />
							<h2>Categories</h2>
						</div>
						<BiChevronDown className="text-xl hidden md:block" />
					</button>
					<div className="absolute top-3 left-1 md:top-6 md:left-[270px]" onClick={toggleOpen} >
					{isOpen &&<MenuCategories/>}
					</div>

					<div className="md:hidden flex gap-2">
						<h3>Menu</h3>
						<span className="pt-1">
							<AiOutlineMenu />
						</span>
					</div>

					<div className="md:pt-3 font-semibold text-white">
						<ul className="md:flex gap-7 sm: hidden">
							<li className="hover:text-red-600"><Link to='/'>Home</Link></li>
							<li className="hover:text-red-600"><Link to='/shop'>Compras</Link></li>
							<li className="hover:text-red-600"><Link to='/login'>Login</Link></li>
							<li className="hover:text-red-600"><Link to='/register'>Registro</Link></li>
							<li className="hover:text-red-600"><Link to='/nosotros'>Sobre Nosotros</Link></li>
							
						</ul>
					</div>
				</div>
			</article>
			<div>
			
			</div>
		</header>
	)
}

export default Navbar
