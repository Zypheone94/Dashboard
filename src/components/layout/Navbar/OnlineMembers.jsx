import './OnlineMembers.scss'
import React from 'react'

import homme1 from '../../../assets/jpg/homme1.jpg'
import homme2 from '../../../assets/jpg/homme2.jpg'
import femme1 from '../../../assets/jpg/femme1.jpg'
import femme2 from '../../../assets/jpg/femme2.jpg'

const OnlineMembers = () => {
	return (
		<div className="onlineMemberNavbar">

			<div className="text">
				<div className="round"></div>
				<span className="s12 w700">ONLINE</span>
			</div>

			<div className="members">

				<MemberPhoto image={homme1} />
				<MemberPhoto image={homme2} />
				<MemberPhoto image={femme1} />
				<MemberPhoto image={femme2} />

			</div>
			
		</div>
	)
}


const MemberPhoto = ({image}) => {
	return (
		<div className="memberPhoto">
			<img src={image} alt="" />
		</div>
	)
}

export default OnlineMembers
