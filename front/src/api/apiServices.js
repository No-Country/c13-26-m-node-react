// apiService.js
import axios from "axios"
import { BASE_URL } from "./endpoints"
import products from "../components/products/productsContainer/products"

const apiClient = axios.create({
	baseURL: BASE_URL,
	// headers, autenticación, interceptores, etc.
})

const getProducts = async () => {
	try {
		await new Promise(resolve => setTimeout(resolve, 2000))
		const response = products
		return response

	} catch (error) {
		console.log("something went wrong at getProducts")
		return error.msg
	}
}

export { getProducts }

// export const loginUser = async (credentials) => {
//   try {
//     const response = await apiClient.post(LOGIN_ENDPOINT, credentials);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
