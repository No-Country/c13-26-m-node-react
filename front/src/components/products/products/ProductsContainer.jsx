import React from 'react'
import ProductCard from '../productCard/ProductCard'
import products from './products'

const ProductsContainer = () => {
	return (
		<div className='flex flex-wrap justify-center gap-5
										p-5 border'>
			{products.map(product => <ProductCard product={product}/>)}
		</div>
	)
}

export default ProductsContainer