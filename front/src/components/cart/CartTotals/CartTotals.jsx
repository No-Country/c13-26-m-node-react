import React from "react"

const props = {
	items: 99,
	totalPrice: 9999,
}

const CartTotals = () => {
	const { items, totalPrice } = props

	return (
		<div>
			<h2 className="font-semibold mt-5">Cart Totals</h2>
			<div className="px-5 py-3 flex justify-end items-center gap-5 font-normal shadow-container">
				<p className="mr-auto">Items: {items}</p>
				<p>Total: ${totalPrice}</p>
				<button
					className="bg-gray-400 text-grey-darkest font-bold py-2 px-4 rounded-full inline-flex items-center
													hover:bg-gray-700 hover:text-gray-100"
				>
					<span>Proceed to checkout</span>
				</button>
			</div>
		</div>
	)
}

export default CartTotals