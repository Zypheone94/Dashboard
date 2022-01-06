import React from 'react'
import {Route} from 'react-router-dom'

const AuthenticatedRoute = ({C, auth, ...rest}) => {

	return (
		<Route {...rest}>
			{
				auth &&
				<C />
			}
			
		</Route>
	)
}

export default AuthenticatedRoute