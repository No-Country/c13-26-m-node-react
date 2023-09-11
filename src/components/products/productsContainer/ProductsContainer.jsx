import React, { useEffect, useState } from "react"
import ProductCard from "../productCard/ProductCard"
import { getProducts } from "../../../api/apiServices"

const initialProd = Array.from(Array(10).keys())

const ProductsContainer = () => {
	const [products, setProducts] = useState(initialProd)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getProducts()
			.then(products => {
				console.log(products)
				setProducts(products)
				setLoading(false)
			})
			.catch(error => {
				console.log(error.msg)
			})
	}, [])

	return (
		<div className="border">
			<div
				className="flex flex-wrap justify-center gap-5
									p-5"
			>
				{products.map(product => (
					<ProductCard key={product.id || product} product={product} loading={loading} />
				))}
			</div>
		</div>
	)
}

export default ProductsContainer
