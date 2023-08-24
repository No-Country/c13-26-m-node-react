import React from "react"
import useCounter from "../../hooks/useCounter"

const Counter = ({ initialValue }) => {
	const { value, increment, decrement, reset } = useCounter(initialValue)

	return (
		<div className="flex justify-center items-center gap-3">
			<button onClick={decrement} className="">-</button>
			<span>{value}</span>
			<button onClick={increment}>+</button>
		</div>
	)
}

export default Counter
