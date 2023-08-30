import React from "react"
import UpperBar from "../../components/products/upperBar/UpperBar"
import SectionTitle from "../../components/sectionTitle/SectionTitle"
import AsideBar from "../../components/products/aside/AsideBar"
import ProductsContainer from "../../components/products/products/ProductsContainer"

const Products = () => {
	return (
		<div id="all-container" className="font-poppins p-1
																			md:w-[90%] md:m-auto
																			lg:w-[80%]">
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
														lg:w-[60%] lg:py-5
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
