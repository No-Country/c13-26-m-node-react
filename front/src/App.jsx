import "./App.css"
import Home from "./views/home/Home"
import Cart from "./views/cart/Cart"
import Products from "./views/products/Products"
import Footer from "./components/footer/Footer"
import { Route, Routes } from "react-router-dom"
import Detail from "./views/detail/Detail"
import Login from "./views/login/Login"
import Register from "./views/register/Register"
import UserDashboard from "./views/userDashboard/userDashboard"


function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/cart' element={<Cart/>}/>
				<Route path='/detail' element={<Detail/>}/>
				<Route path='/shop' element={<Products/>}/>
				<Route path='/login' element={<Login/>}/>
				<Route path='/register' element={<Register/>}/>
				<Route path='/userDashboard' element={<UserDashboard/>}/>
			</Routes>
            <Footer/>
		</div>
	)
}


export default App
