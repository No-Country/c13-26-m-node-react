

import ProductsContainer from "../../components/products/productsContainer/ProductsContainer"

const Results = () => {
  return (
    
    <div id="all-container" className="font-poppins p-1
																			md:w-[90%] md:m-auto
																			lg:w-[80%] py-16">
			<div className="w-full">
				<section className="flex
														flex-col-reverse
														md:flex-row
														">
					<div className="border">
						<ProductsContainer />
					</div>
				</section>
			</div>
		</div>

  )
}

export default Results