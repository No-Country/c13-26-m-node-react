import { useState } from "react"
import CartTable from "../../components/cart/CartTable/CartTable"
import CartTotals from "../../components/cart/CartTotals/CartTotals"

let InitProducts = [
	{
		id: 1,
		img: "url",
		itemName: "Item Name",
		price: 1000,
		quantity: 3,
		subtotal: 3000,
	},
	{ id: 2, img: "url", itemName: "Item Name", price: 1000, quantity: 2, subtotal: 3000 },
	{ id: 3, img: "url", itemName: "Item Name", price: 1000, quantity: 1, subtotal: 3000 },
]

const initTotals = {
  items: 99,
  totalPrice: 9999
}

const Cart = () => {

  const [products, setProducts] = useState(InitProducts)
  const [totals, setTotals] = useState(initTotals)

	return (
		<div>
			<div id="allcontainer" className="max-w-4xl m-auto ">
        <div id="header">
          <div id="path">
            <p className='mt-10'>Home / Cart</p>
          </div>
          <h2 className="text-3xl font-normal py-2">Cart</h2>
          <CartTable products={products} />
          <CartTotals totals={totals}/>
        </div>
      </div>
		</div>
	)
}

export default Cart
