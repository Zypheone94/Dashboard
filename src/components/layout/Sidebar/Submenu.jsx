import './Submenu.scss'
import React from 'react'

const Submenu = ({children, title}) => {
	return (
		<nav className="sidebarSubmenu">

			<h1 className="s12 w400">{title}</h1>

			<div className="buttonsList">
				{children}
			</div>
			
			
		</nav>
	)
}

export default Submenu
