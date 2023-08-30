import React from "react"
import UpperBar from "../../components/products/upperBar/UpperBar"
import SectionTitle from "../../components/sectionTitle/SectionTitle"
import AsideBar from "../../components/products/aside/AsideBar"
import ProductsContainer from "../../components/products/products/ProductsContainer"

const Products = () => {
	return (
		<div id="all-container" className="p-[5%]">
			<div className="w-full">
				<SectionTitle title="Shop" />
				<UpperBar />
				<section className="grid grid-cols-4 h-screen">
					<div className="col-span-3 border">
						<ProductsContainer />
					</div>
					<aside className="py-7 px-10 border">
						<AsideBar />
					</aside>
				</section>
			</div>
		</div>
	)
}

export default Products
