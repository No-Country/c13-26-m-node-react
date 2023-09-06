import React from 'react'
import { Link } from 'react-router-dom'

const NavigationLink = ({icon, sectionPath, sectionName}) => {
	return (
		<div className='flex w-full p-3 gap-2 rounded-lg
										hover:bg-slate-200'>
			<img className='h-5' src={icon} alt={icon} />
			<Link to={`/userDashboard/${sectionPath}`}>{sectionName}</Link>
		</div>
	)
}

export default NavigationLink