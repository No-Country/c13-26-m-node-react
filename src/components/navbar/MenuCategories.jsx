import { Link } from "react-router-dom"


const MenuCategories = () => {
  return (
    <article className="bg-black w-52 pl-3 font-semibold text-[14px] font-poppins text-white
     leading-10 md:w-[250px]
     border-gray-700 border-2 md:pl-4 md:leading-[50px] rounded-xl">
        <ul>      
            <li className="hover:text-red-600 border-b-[1px] border-gray-300"><Link to='/'>Cameras</Link></li>
						<li className="hover:text-red-600 border-b-[1px] border-gray-300"><Link to='/celulares'>Cell Phones</Link></li>
						<li className="hover:text-red-600 border-b-[1px] border-gray-300"><Link to='/detail'>Computer Hardware</Link></li>
						<li className="hover:text-red-600 border-b-[1px] border-gray-300"><Link to='/shop'>Headphones</Link></li>
						<li className="hover:text-red-600 border-b-[1px] border-gray-300"><Link to='/login'>Laptops</Link></li>
						<li className="hover:text-red-600 border-b-[1px] border-gray-300"><Link to='/register'>Monitors</Link></li>
						<li className="hover:text-red-600 border-b-[1px] border-gray-300"><Link to='/userprofile'>Smart Watches</Link></li>
            <li className="hover:text-red-600 border-b-[1px] border-gray-300"><Link to='/login'>Tablets</Link></li>
						<li className="hover:text-red-600 border-b-[1px] border-gray-300"><Link to='/register'>Televisions</Link></li>
						<li className="hover:text-red-600 border-b-[1px] border-gray-300"><Link to='/userprofile'>Video games</Link></li>
          </ul>
    </article>
  )
}

export default MenuCategories