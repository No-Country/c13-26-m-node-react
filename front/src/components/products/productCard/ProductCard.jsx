import React from "react"

const ProductCard = ({ product }) => {
	const { name, category, price, img, rating, description } = product

	return (
		<div
			className="flex flex-col justify-center items-center
								text-center shadow-container w-48 h-72"
		>
			<img src={img} alt="" />
			<p className="text-red-500">{category}</p>
			<p className="font-semibold">{name}</p>
			<p className="font-semibold">{price}</p>
			<p className="font-semibold">{rating}</p>
			<button
				className="w-2/3 py-1 px-5
									border rounded-full
									text-xs"
			>
				ADD TO CART
			</button>
		</div>
	)
}

export default ProductCard
