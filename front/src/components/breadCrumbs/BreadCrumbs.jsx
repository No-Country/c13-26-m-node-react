import React from "react"
import { Link, useLocation } from "react-router-dom"
import capitalizeWords from "../../utils/capitalizeWords"

const BreadCrumbs = () => {
	const location = useLocation()
	const pathSegments = location.pathname.split("/").filter(segment => segment !== "")

	return (
		<div
			className="flex
                text-xs tracking-[0.2rem]
                lg:text-sm"
		>
			<Link to="/">Home</Link>
			{pathSegments.map((segment, index) => (
				<div key={index} className="flex">
					<span>{'>'}</span>
					<Link to={`/${pathSegments.slice(0, index + 1).join("/")}`}>
						<p className={index === pathSegments.length - 1 && "text-red-500"}>{capitalizeWords(segment)}</p>
					</Link>
				</div>
			))}
		</div>
	)
}

export default BreadCrumbs
