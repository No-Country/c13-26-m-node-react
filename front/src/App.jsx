import "./App.css"
import Home from "./views/home/Home"
import Cart from "./views/cart/Cart"
import { Route, Routes } from "react-router-dom"
import Detail from "./views/detail/Detail"

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/cart' element={<Cart/>}/>
				<Route path='/detail' element={<Detail/>}/>
			</Routes>
		</div>
	)
}

export default App
