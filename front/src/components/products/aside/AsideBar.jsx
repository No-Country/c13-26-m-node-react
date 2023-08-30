import React from 'react'
import Filters from '../filters/Filters'
import CartResume from '../../cart/cartResume/CartResume'

const AsideBar = () => {
	return (
		<div className=''>
			<Filters />
			<CartResume />
		</div>
	)
}

export default AsideBar