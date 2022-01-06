import './Sidebar.scss'
import React from 'react'
import Submenu from './Submenu'
import Button from './Button'

import {Chart, Find, Calendar, Folder, Chat, User, Graph, Settings, Question} from '../../common/Icons'

const Sidebar = () => {
	return (
		<div className="sidebarMain">

			<div className="top">
				<div className="logo">
					<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
						<rect width="40" height="40" rx="8" fill="#017EFA"/>
						<path d="M20 10a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" fill="#fff"/>
						<path d="m21 14-6 7h4v5l6-7h-4v-5Z" fill="#fff"/>
					</svg>

					<h1 className="s24 w800">Dash</h1>
				</div>

				<div className="menu noselect">
					<Submenu title="Main menu">
						<Button title="Dashboard" path="/" Icon={Chart} />
						<Button title="Inbox" Icon={Chat} notification={1} />
					</Submenu>

					<Submenu title="Workspace">
						<Button title="Accounts" Icon={User} />
						<Button title="Schedule Post" Icon={Calendar} />
						<Button title="Communities" Icon={Find} />
						<Button title="Analytics" Icon={Graph} />
					</Submenu>

					<Submenu title="General">
						<Button title="File & Folders" Icon={Folder} />
						<Button title="Settings" path="/settings" Icon={Settings} />
					</Submenu>
				</div>	
			</div>

			<div className="bottom">
				<div className="needHelp">
					<div className="questionIcon">
						<Question />
					</div>

					<p className="s14 w400">Need Help with Dash ?</p>

					<button className="s14 w400">
						Go to help center
					</button>

				</div>
			</div>



			
		</div>
	)
}

export default Sidebar
