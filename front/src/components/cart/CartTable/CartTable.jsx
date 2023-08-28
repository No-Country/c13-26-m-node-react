import { MdOutlineDeleteForever as DeleteIcon } from "react-icons/md"
import Counter from "../../counter/Counter"

const CartTable = ({ products }) => {
	return (
		<table className="table-auto w-full m-auto text-center">
			<thead>
				<tr className="bg-red-500 text-slate-50">
					<th className="text-center rounded-tl-2xl">Action</th>
					<th className="text-center">Item</th>
					<th className="">Price</th>
					<th className="">Quantity</th>
					<th className="rounded-tr-2xl">Subtotal</th>
				</tr>
			</thead>
			<tbody
				className="shadow-container
												[&>*:last-child]:rounded-b-lg"
			>
				{products.map(product => (
					<tr className="group:last:bg-red-400">
						<td>
							<button className="">
								<DeleteIcon />
							</button>
						</td>
						<td className="">
							<img src={product.img} alt={product.name} />
							<p className="text-center">{product.itemName}</p>
						</td>
						<td>${product.price}</td>
						<td>
							<Counter initialValue={product.quantity}/>
						</td>
						<td>{product.subtotal}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default CartTable
