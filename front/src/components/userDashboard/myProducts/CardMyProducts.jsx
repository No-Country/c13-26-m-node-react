import React from "react";
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai';


const CardMyProducts = () => {

    return (
        <div className="flex m-2 w-1/2 border border-1 border-gray-400 rounded-xl col-2 card card-side bg-base-100 shadow-xl">
            <div className="my-8">
                <img className="h-42" src="https://res.cloudinary.com/dreso9ye9/image/upload/v1692627425/iPhone12PromaxGrafito_byckia.png" style={{ width: "250vh" }} alt="Movie" />
                <div className='[&>p]:text-yellow-500 flex justify-center items-center'>
                    <p className=""><AiFillStar /></p>
                    <p className=""><AiFillStar /></p>
                    <p className=""><AiFillStar /></p>
                    <p className=""><AiFillStar /></p>
                    <p className=""><AiFillStar /></p>
                </div>
            </div>
            <div className="my-8 me-8 card-body space-y-2">
                <h2 className="card-title text-xl font-semibold">iPhone 12 Pro Max</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                <h3>Precio: $500.00</h3>
                <p>Total disponible: 100</p>
                <div className="card-actions flex justify-center">
                    <button className="mx-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                        Eliminar
                    </button>
                    <button className="mx-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
                        Editar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardMyProducts