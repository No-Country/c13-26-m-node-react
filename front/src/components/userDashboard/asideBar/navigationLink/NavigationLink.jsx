import React from "react"
import { Link } from "react-router-dom"

const NavigationLink = ({ icon, sectionPath, sectionName }) => {
	return (
		<Link
			className="flex w-full p-3 gap-2 rounded-lg
										hover:bg-red-100"
			to={`/userDashboard/${sectionPath}`}
		>
			<img className="h-5" src={icon} alt={icon} />
			<p>{sectionName}</p>
		</Link>
	)
}

export default NavigationLink
