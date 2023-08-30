import React from "react"
import UpperBar from "../../components/products/upperBar/UpperBar"
import SectionTitle from "../../components/sectionTitle/SectionTitle"
import AsideBar from "../../components/products/aside/AsideBar"
import ProductsContainer from "../../components/products/products/ProductsContainer"

const Products = () => {
	return (
		<div id="all-container sm:border sm:border-blue-900" className="font-poppins p-1">
			<div className="w-full ">
				<SectionTitle title="Shop" />
				<UpperBar />
				<section className="flex
														flex-col-reverse
														md:flex-row
														">
					<div className="border">
						<ProductsContainer />
					</div>
					<aside className="py-2
														md:px-1 md:py-7 md:w-full md:border
														lg:w-[60%] lg:py-2
														xl:w-[30%] xl:p-5
														">
						<AsideBar />
					</aside>
				</section>
			</div>
		</div>
	)
}

export default Products
