import React, { useState } from "react"
import NavigationLink from "../navigationLink/NavigationLink"

const NavigationGroup = ({ icon, links, sectionName }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<div className="flex cursor-pointer p-3 gap-2 hover:bg-slate-200 w-full rounded-lg" onClick={() => setIsOpen(!isOpen)}>
				<img className="h-5" src={icon} alt={icon} />
				<p>{sectionName}</p>
			</div>
			<div className={`flex flex-row
											${isOpen ? "hidden" : null}
											w-full`}>
				<div className="border border-red-500 mx-3 my-1"></div>
				<div className='flex flex-col gap-1'>
				{links.map(config => (
					<NavigationLink icon={config.icon} sectionPath={config.sectionPath} sectionName={config.sectionName} />
				))}
				</div>
			</div>
		</>
	)
}

export default NavigationGroup
