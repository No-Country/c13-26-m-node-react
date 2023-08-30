import React from "react"
import BreadCrumbs from "../breadCrumbs/BreadCrumbs"

const SectionTitle = ({ title }) => {
	return (
		<div>
			<div id="path">
				<BreadCrumbs />
			</div>
			<h2 className="text-3xl font-normal py-2">{title}</h2>
		</div>
	)
}

export default SectionTitle
