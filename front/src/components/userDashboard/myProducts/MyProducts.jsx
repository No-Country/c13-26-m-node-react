import React from 'react'
import CardMyProducts from './CardMyProducts'
import SearchBar from './SearchBar'

const MyProducts = () => {
	return (
		<div className='mx-14'>
			<div className="flex justify-start mb-4">
				<h2 className="text-2xl font-bold md:text-3xl">
					Mi inventario
				</h2>
			</div>
			<div className='flex col-2 mb-6'>
				<SearchBar />
				<button className="mx-4 bg-gray-800 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full">
					Añadir productos
				</button>
			</div>

			<div className='flex col-2'>
				<CardMyProducts />
				<CardMyProducts />
			</div>
		</div>
	)
}

export default MyProducts