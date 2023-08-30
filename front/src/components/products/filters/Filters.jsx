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
				className="w-full rounded-lg border px-2 py-2
									text-xs"
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
