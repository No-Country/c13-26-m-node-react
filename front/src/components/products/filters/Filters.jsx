import React from "react"

const options = ["option1", "option2", "option3", "option4", "option5", "option6", "option7"]

const Filters = () => {
	return (
		<div>
			<h4
				className="mb-2
									font-semibold text-xs"
			>
				Select a category
			</h4>
			<select
				name=""
				id=""
				className="w-full px-2 py-1 text-xs
									cursor-pointer
									rounded-lg border border-neutral-700 shadow-md
									hover:border hover:border-red-400"
			>
				{options.map(option => (
					<option key={"filter-" + option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	)
}

export default Filters
