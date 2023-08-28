import React from 'react'
import SearchBar from '../searchBar/SearchBar'

const UpperBar = () => {
	return (
		<div className='flex justify-end
										w-full py-2 px-5 my-2
										shadow-container'>
			<SearchBar />
		</div>
	)
}

export default UpperBar