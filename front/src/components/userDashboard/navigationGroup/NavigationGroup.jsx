import React, { useState } from "react"
import NavigationLink from "../navigationLink/NavigationLink"

const NavigationGroup = ({ icon, links, sectionName }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<div className="flex cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
				<img src={icon} alt={icon} />
				<p>{sectionName}</p>
			</div>
			<div className={`flex flex-row ${isOpen ? 'hidden' : null}`}>
				<div className="border border-blue-500 ml-2"></div>
				<div className="ml-5">
					{links.map(config => (
						<NavigationLink icon={config.icon} sectionPath={config.sectionPath} sectionName={config.sectionName} />
					))}
				</div>
			</div>
		</>
	)
}

export default NavigationGroup
