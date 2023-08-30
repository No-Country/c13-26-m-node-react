import React from "react"
import SearchBar from "../searchBar/SearchBar"
import SortingMenu from "../sortingMenu/SortingMenu"

const UpperBar = () => {
	return (
		<div
			className="flex flex-col-reverse
								md:justify-end md:items-center md:flex-row
								w-full py-2 gap-3"
		>
			<div className="md:mr-auto">
				<SortingMenu />
			</div>
			<SearchBar />
		</div>
	)
}

export default UpperBar
