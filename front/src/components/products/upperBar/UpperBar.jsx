import React from "react"
import SearchBar from "../searchBar/SearchBar"
import SortingMenu from "../sort/SortingMenu"

const UpperBar = () => {
	return (
		<div
			className="flex justify-end items-center
										w-full py-2 px-5
										"
		>
			<div className="mr-auto">
				<SortingMenu />
			</div>
			<SearchBar />
		</div>
	)
}

export default UpperBar
