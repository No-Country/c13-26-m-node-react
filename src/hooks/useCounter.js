import { useState } from "react"

const useCounter = initialValue => {
	const [value, setValue] = useState(initialValue)

	const increment = () => setValue(prev => prev + 1)
	const decrement = () => {
		value > 0 && setValue(prev => prev - 1)
	}
	const reset = () => setValue(initialValue)

	return { value, increment, decrement, reset }
}

export default useCounter