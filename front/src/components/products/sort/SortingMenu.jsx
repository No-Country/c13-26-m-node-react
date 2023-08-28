import React from "react"

const SortingMenu = () => {
	return (
		<div>
			<select className="appereance-none pr-10 pl-2 py-1" name="sort" id="sort">
				<option className="" value="none" selected disabled>
					Sort Products
				</option>
				<option value="minor">Menor precio</option>
				<option value="mayor">Mayor precio</option>
			</select>
		</div>
	)
}

export default SortingMenu
