import React from "react"
import Loader from "../../loader/Loader"

const ProductCard = ({ product, loading }) => {
	const { name, category, price, img, rating, description } = product

	return (
		<div
			className="flex flex-col justify-center items-center
								w-[90%] h-72
								text-center shadow-container
								md:w-56
								lg:w-52"
		>
			{loading ? (
				<Loader />
			) : (
				<>
					<img className="h-1/2" src={img} alt="" />
					<p className="text-red-500 text-xs">{category}</p>
					<p className="font-semibold">{name}</p>
					<p className="text-sm">{price}</p>
					<p className="font-semibold">⭐⭐⭐</p>
					<button
						className="w-2/3 py-1 px-5
									border border-neutral-700 rounded-full shadow-md
									text-xs
									hover:bg-red-100"
					>
						ADD TO CART
					</button>
				</>
			)}
		</div>
	)
}

export default ProductCard
