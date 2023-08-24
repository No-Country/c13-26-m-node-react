
let initial = [
	{ itemName: "This is the longest longest longest item name", price: 1000, quantity: 3, subtotal: 3000 },
	{ itemName: "Item Name", price: 1000, quantity: 3, subtotal: 3000 },
	{ itemName: "Item Name", price: 1000, quantity: 3, subtotal: 3000 },
]

const CartTable = () => {
	const [products, setProducts] = useState(initial)

	return (
		<table class="table-auto w-3/4 m-auto text-center">
			<thead>
				<tr className="bg-red-500 text-slate-50">
					<th className="w-3/5 p-3 text-center rounded-tl-2xl">Item</th>
					<th>Price</th>
					<th>Quantity</th>
					<th className="rounded-tr-2xl">Subtotal</th>
				</tr>
			</thead>
			<tbody>
				{products.map(product => 
					<tr>
						<td className="text-left p-3 flex"><button className="mx-5">x</button><p className="px-8">{product.itemName}</p></td>
						<td>{product.price}</td>
						<td>{product.quantity}</td>
						<td>{product.subtotal}</td>
					</tr>
				)}
			</tbody>
		</table>
	)
}

export default CartTable