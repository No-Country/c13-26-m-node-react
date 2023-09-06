import React from 'react'
import { Link } from 'react-router-dom'

const NavigationLink = ({icon, sectionPath, sectionName}) => {
	return (
		<div className='flex gap-1'>
			<img src={icon} alt={icon} />
			<Link to={`/${sectionPath}`}>{sectionName}</Link>
		</div>
	)
}

export default NavigationLink