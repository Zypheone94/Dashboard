import './Profil.scss'
import React from 'react'
import profilPicture from '../../../assets/jpg/profil.jpg'

const Profil = () => {
	return (
		<div className="navbarProfil">

			<div className="image">
				<img src={profilPicture} alt="Profil picture" />
			</div>

			<div className="infos">
				<h1 className="s16 w700">Maxime DURAND</h1>
				<p className="s12 w700">maxime.durand@email.com</p>
			</div>
			
			<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M16.3 9.3 12 13.6 7.7 9.3l-1.4 1.4 5.7 5.7 5.7-5.7-1.4-1.4Z" fill="#1C1F37"/>
			</svg>
		</div>
	)

}

export default Profil
