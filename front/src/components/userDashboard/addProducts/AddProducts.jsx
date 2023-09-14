import React, { useState } from "react";
import axios from "axios";



const AddProducts = () => {

  const BackendUrl = import.meta.env.VITE_BACKEND_URL


  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: ""
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const resp = await axios.post(`${BackendUrl}/products`, product);
      console.log(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  return (
    <main className='bg-white text-black flex justify-center items-center flex-col font-poppins '>

      <div className="flex justify-start gap-5 md:gap-28">
        <h2 className="text-2xl font-bold md:text-3xl">
          Añadir Productos
        </h2>
      </div>

      <form className=' bg-white mb-5'>

        <div className="flex flex-row justify-center flex-wrap gap-4">
          <div className='h-10 w-72 rounded-lg flex items-center px-4 my-6 border-gray-300 border-2 md:w-[500px] ml-12 md:ml-0'>
            <input type="text"
              name='name'
              placeholder='Nombre del producto'
              className='outline-none' />
          </div>
        </div>

        <div>
          <textarea rows="2" class="w-72 rounded-lg flex items-center px-4 my-6 border-gray-300 border-2 md:w-[500px] ml-12 md:ml-0"
            placeholder="Breve descripcion"></textarea>
        </div>

        <div className="flex flex-row justify-center flex-wrap gap-4">
          <div className=' h-10 w-60 rounded-lg flex items-center px-4 my-6 border-gray-300 border-2'>
            $
            <input type="number"
              name='prince'
              placeholder=' Precio del producto'
              className='outline-none' />
          </div>
          <div className=''>
            <select className="h-10 w-60 rounded-lg flex items-center px-4 my-6 border-gray-300 border-2">
              <option selected>Categoria del producto</option>
              <option value="Cell Phones">Cell Phones</option>
              <option value="Computer Hardware">Computer Hardware</option>
              <option value="Headphones">Headphones</option>
              <option value="Laptops">Laptops</option>
              <option value="Smart Watches">Smart Watches</option>
              <option value="Monitors">Monitors</option>
              <option value="Televisions">Televisions</option>
              <option value="Tablets">Tablets</option>
              <option value="Video games">Video games</option>
            </select>
          </div>
        </div>

        <div>
          <textarea rows="4" class="w-72 rounded-lg flex items-center px-4 my-6 border-gray-300 border-2 md:w-[500px] ml-12 md:ml-0"
            placeholder="Informacion adicional"></textarea>
        </div>

        <div className='flex justify-center'>
          <h6>Imagen</h6>
          <button type='submit' className='w-32 mx-8 bg-white text-[16px] h-8 rounded-2xl font-semibold  border-[1px] text-gray-800 border-gray-400'>
            Subir imagen
          </button>
        </div>

        <div className="flex gap-3 justify-center md:justify-start">
          <button type='submit' className='w-28 bg-black text-white text-[16px] h-8 rounded-2xl font-semibold mt-8'>
            Publicar
          </button>
          <button type='submit' className='w-28 bg-white text-gray-500 h-8 rounded-2xl font-semibold mt-8 text-[16px] border-gray-400 border-[1px]'>
            x Clear all
          </button>
        </div>
      </form>

    </main>
  )
}

export default AddProducts