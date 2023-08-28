import React from "react"
import UpperBar from "../../components/products/upperBar/UpperBar"
import SectionTitle from "../../components/sectionTitle/SectionTitle"

const Products = () => {
	return (
		<div id="all-container" className="p-[5%]">
			<div className="w-full">
				<SectionTitle title="Shop" />
				<UpperBar />
			</div>
		</div>
	)
}

export default Products
