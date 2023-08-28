import React from "react"
import UpperBar from "../../components/products/upperBar/UpperBar"
import SectionTitle from "../../components/sectionTitle/SectionTitle"
import AsideBar from "../../components/products/aside/AsideBar"

const Products = () => {
	return (
		<div id="all-container" className="p-[5%]">
			<div className="w-full">
				<SectionTitle title="Shop" />
				<UpperBar />
				<section className="grid grid-cols-4 h-screen">
					<div className="col-span-3 bg-slate-900">1</div>
					<aside className="p-3 bg-slate-700">
						<AsideBar />
					</aside>
				</section>
			</div>
		</div>
	)
}

export default Products
