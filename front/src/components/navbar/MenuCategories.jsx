import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MenuCategories = () => {
  const [categories, setCategories] = useState([]); // State to store categories

  const formatCategoryName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/categories");
      // Establecer el array de objetos de categorías en el estado
      setCategories(data.categories);
    } catch (error) {
      // Handle any errors here
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    // Llamar a la función para obtener las categorías
    fetchCategories();
  }, []);

  return (
    <article className="bg-black w-52 pl-3 font-semibold text-[14px] font-poppins text-white
     leading-10 md:w-[250px]
     border-gray-700 border-2 md:pl-4 md:leading-[50px] rounded-xl">
      <ul>
        {/* Map over the categories and create links */}
        {categories.map((category) => (
          <li key={category._id} className="hover:text-red-600 border-b-[1px] border-gray-300">
            <Link to={`/results/${category._id}`}>
              {formatCategoryName(category.name)}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default MenuCategories;
