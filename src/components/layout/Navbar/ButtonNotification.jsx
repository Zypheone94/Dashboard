import './ButtonNotification.scss'
import React from 'react'

const ButtonNotification = ({notification, color}) => {
	return (
		<div className="buttonNotificationNavbar">
			<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M19 13.6V10a7 7 0 0 0-5.1-6.7 2 2 0 0 0-3.8 0A7 7 0 0 0 5 10v3.6l-1.7 1.7a1 1 0 0 0-.3.7v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a1 1 0 0 0-.3-.7L19 13.6Zm0 3.4H5v-.6l1.7-1.7A1 1 0 0 0 7 14v-4a5 5 0 0 1 10 0v4c0 .3.1.5.3.7l1.7 1.7v.6Zm-7 5a3 3 0 0 0 2.8-2H9.2a3 3 0 0 0 2.8 2Z" fill="#000"/>
				{
					notification &&
					<circle 
						cx="19.5" 
						cy="6.5" 
						r="4.5" 
						fill={color}
					/>
				}
				
			</svg>
		</div>

	)
}

export default ButtonNotification
