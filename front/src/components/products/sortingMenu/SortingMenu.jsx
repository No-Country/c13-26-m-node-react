import React from "react"

const SortingMenu = () => {
	return (
		<div>
			<select className="appereance-none pr-10 pl-2 py-1 text-xs
													md:text-sm" name="sort" id="sort">
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
