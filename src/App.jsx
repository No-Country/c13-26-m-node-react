import "./App.css"
import Home from "./views/home/Home"
import Cart from "./views/cart/Cart"
import Products from "./views/products/Products"
import Footer from "./components/footer/Footer"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Detail from "./views/detail/Detail"
import Login from "./views/login/Login"
import Register from "./views/register/Register"
import UserDashboard from "./views/userDashboard/UserDashboard" 
import PersonalInfo from "./components/userDashboard/personalInfo/PersonalInfo"
import MyPurchases from "./components/userDashboard/myPurchases/MyPurchases"
import MyProducts from "./components/userDashboard/myProducts/MyProducts"
import AddProducts from "./components/userDashboard/addProducts/AddProducts"
import SellsRegistry from "./components/userDashboard/sellsRegistry/SellsRegistry"
import Orders from "./components/userDashboard/orders/Orders"
import UserProfile from "./components/user/UserProfile"






function App() {

	return (
		<div>
			<Navbar/>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/cart' element={<Cart/>}/>
				<Route path='/detail' element={<Detail/>}/>
				<Route path='/shop' element={<Products/>}/>
				<Route path='/login' element={<Login/>}/>
				<Route path='/register' element={<Register/>}/>
				<Route path='/userprofile' element={<UserProfile/>}/>
				<Route path='userDashboard' element={<UserDashboard/>}>
					<Route path='personalInfo' element={<PersonalInfo />}/>
					<Route path='mypurchases' element={<MyPurchases />}/>
					<Route path='myproducts' element={<MyProducts />}/>
					<Route path='addproducts' element={<AddProducts />}/>
					<Route path='sells' element={<SellsRegistry />}/>
					<Route path='orders' element={<Orders />}/>
				</Route>
			</Routes>
      		<Footer/>
		</div>
	)
}


export default App
