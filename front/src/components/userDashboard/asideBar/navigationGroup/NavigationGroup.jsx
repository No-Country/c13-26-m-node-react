import React, { useState } from "react"
import NavigationLink from "../navigationLink/NavigationLink"
import menuIcon from '../../../../assets/icons/arrow-down.svg'

const NavigationGroup = ({ icon, links, sectionName }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<div className="flex cursor-pointer p-3 gap-2 hover:bg-red-100 w-full rounded-lg" onClick={() => setIsOpen(!isOpen)}>
				<img className="h-5" src={icon} alt={icon} />
				<p>{sectionName}</p>
				<img className={`h-5 ml-auto
												${isOpen ? 'rotate-180' : null}`} src={menuIcon} alt="" />
			</div>
			<div className={`flex flex-row
											${isOpen ? null : 'hidden'}
											w-full`}>
				<div className="border border-red-500 ml-5 mr-1 my-1"></div>
				<div className='flex flex-col gap-1 w-full'>
				{links.map(config => (
					<NavigationLink icon={config.icon} sectionPath={config.sectionPath} sectionName={config.sectionName} />
				))}
				</div>
			</div>
		</>
	)
}

export default NavigationGroup