import React from 'react'

const options = ['option1','option2','option3','option4','option5','option6','option7']

const Filters = () => {
	return (
		<div>
			<h4 className='mb-2
										font-semibold text-s'>
											Select a category
			</h4>
			<select name="" id="" className='w-full rounded-lg border px-2'>
				{options.map(option => <option value={option}>{option}</option>)}
			</select>
		</div>
	)
}

export default Filters