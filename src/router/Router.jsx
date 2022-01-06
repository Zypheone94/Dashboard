import React from "react";
import UnauthenticatedRoute from "./routes/UnauthenticatedRoute";
import AuthenticatedRoute from "./routes/AuthenticatedRoute";
import { BrowserRouter, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Settings from "../pages/Settings";

const Router = () => {
	const auth = true;

	return (
		<BrowserRouter>
			<Switch>
				<UnauthenticatedRoute
					exact
					path="/"
					auth={auth}
					C={Home}
					layout="dashboard"
				/>
				<UnauthenticatedRoute
					path="/settings"
					auth={auth}
					C={Settings}
					layout="dashboard"
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
