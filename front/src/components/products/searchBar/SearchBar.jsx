import React from 'react'

const SearchBar = () => {

const clickHandler = () => {
	alert('click')
}

	return (
		<div className="">
  <div class="flex w-full flex-wrap">
    <input
      type="search"
      className="m-0 mr-0.5 block flex-auto border bg-transparent  px-3 font-normal  text-neutral-700 focus:border-primary focus:text-neutral-700 focus:outline-none "
      placeholder="Search" />

    <button
      className="flex items-center rounded-r text-xs p-2 text-white shadow-md"
      type="button"
>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</div>
	)
}

export default SearchBar