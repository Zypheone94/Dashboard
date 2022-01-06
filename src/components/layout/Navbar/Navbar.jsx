import './Navbar.scss'
import React from 'react'
import Profil from './Profil'
import Search from './Search'
import OnlineMembers from './OnlineMembers'
import ButtonNotification from './ButtonNotification'

const Navbar = () => {
	return (
		<div className="navbarMain">

			<div className="left">

				<Profil />
					<div className="separator"></div>
				<Search />
				
			</div>

			<div className="right">
				<OnlineMembers />
					<div className="separator"></div>
				<ButtonNotification notification={true} color="#FA3F3F" />
			</div>
			
		</div>
	)
}

export default Navbar
