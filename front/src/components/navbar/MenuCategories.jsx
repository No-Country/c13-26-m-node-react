import { Link } from "react-router-dom"


const MenuCategories = () => {
  return (
    <article className="bg-black w-52 pl-3 font-semibold text-[14px] font-poppins text-white
     leading-10 md:w-[250px]
     border-gray-700 border-2 md:pl-4 md:leading-[50px] rounded-xl">
        <ul>      
            <li className="hover:text-red-600 border-b-[1px] border-gray-300"><Link to='/results'>Cameras</Link></li>
						<li className="hover:text-red-600 border-b-[1px] border-gray-300"><Link to='/results'>Cell Phones</Link></li>
						<li className="hover:text-red-600 border-b-[1px] border-gray-300"><Link to='/results'>Computer Hardware</Link></li>
						<li className="hover:text-red-600 border-b-[1px] border-gray-300"><Link to='/results'>Headphones</Link></li>
						<li className="hover:text-red-600 border-b-[1px] border-gray-300"><Link to='/results'>Laptops</Link></li>
						<li className="hover:text-red-600 border-b-[1px] border-gray-300"><Link to='/results'>Monitors</Link></li>
						<li className="hover:text-red-600 border-b-[1px] border-gray-300"><Link to='/results'>Smart Watches</Link></li>
            <li className="hover:text-red-600 border-b-[1px] border-gray-300"><Link to='/results'>Tablets</Link></li>
						<li className="hover:text-red-600 border-b-[1px] border-gray-300"><Link to='/results'>Televisions</Link></li>
						<li className="hover:text-red-600 border-b-[1px] border-gray-300"><Link to='/results'>Video games</Link></li>
          </ul>
    </article>
  )
}

export default MenuCategories