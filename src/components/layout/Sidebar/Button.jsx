import "./Button.scss";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Button = ({ title, Icon, path = "/enAttente", notification }) => {
	const location = useLocation();

	return (
		<Link to={path}>
			<div
				className="sidebarButton s18 w400"
				style={{
					background:
						location.pathname === path ? "#1B2B65" : "unset",
				}}
			>
				<div className="left">
					<Icon />
					{title}
				</div>

				<div className="right">
					{notification && (
						<div className="notification s14 w700">
							{notification}
						</div>
					)}
				</div>
			</div>
		</Link>
	);
};

export default Button;
