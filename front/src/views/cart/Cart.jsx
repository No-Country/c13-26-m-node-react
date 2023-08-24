import CartTable from "../../components/cart/CartTable/CartTable"

const Cart = () => {
	return (
		<div>
			<div id="allcontainer" className="w-full
      border-2 border-black
      ">
        <div id="header">
          <div id="path"></div>
          <h2>Cart</h2>
          <CartTable />
          <div id="cart totals">
            <div id="items"></div>
            <div id="totals"></div>
            <div id="checkout button"></div>
          </div>
        </div>
      </div>
		</div>
	)
}

export default Cart
