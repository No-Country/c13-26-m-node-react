import React from "react"
import ProductCard from "../productCard/ProductCard"
import products from "./products"

const ProductsContainer = () => {
	return (
		<div className="border">
			<div
				className="flex flex-wrap justify-center gap-5
									p-5
									"
			>
				{products.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	)
}

export default ProductsContainer
