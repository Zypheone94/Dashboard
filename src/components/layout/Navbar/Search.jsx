import './Search.scss'
import React from 'react'

const Search = () => {
	return (
		<div className="searchNavbar">

			<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M10 18a8 8 0 0 0 4.9-1.7l4.4 4.4 1.4-1.4-4.4-4.4A8 8 0 1 0 10 18Zm0-14a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z" fill="#828282"/>
			</svg>

			<input type="text" className="s16 w400" placeholder="Search..." />
			
		</div>
	)
}

export default Search
