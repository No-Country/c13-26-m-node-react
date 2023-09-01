import "./App.css"
import Home from "./views/home/Home"
import Cart from "./views/cart/Cart"
import Footer from "./components/footer/Footer"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"

function App() {
	return (
		<div>
			<Navbar/>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/cart' element={<Cart/>}/>
			</Routes>
            <Footer/>
		</div>
	)
}


export default App
