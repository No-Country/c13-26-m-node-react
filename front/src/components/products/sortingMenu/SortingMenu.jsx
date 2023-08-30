import React from "react"

const SortingMenu = () => {
	return (
		<div className="md:flex md:items-center md:gap-2">
			<h2 className="text-xs py-2 font-semibold">Sort by:</h2>
			<select
				className="pr-5 pl-2 py-2 w-full
									appereance-none text-xs border rounded-lg
									md:text-sm md:w-auto md:py-0"
				name="sort"
				id="sort"
			>
				<option className="" value="popular">
					Most popular
				</option>
				<option value="minor">+ Price</option>
				<option value="mayor">- Price</option>
			</select>
		</div>
	)
}

export default SortingMenu
