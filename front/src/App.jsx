import "./App.css"
import Home from "./views/home/Home"
import Cart from "./views/cart/Cart"
import Products from "./views/products/Products"
import { Route, Routes } from "react-router-dom"

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/cart' element={<Cart/>}/>
				<Route path='/shop' element={<Products/>}/>
			</Routes>
		</div>
	)
}

export default App
