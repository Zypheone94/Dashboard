import React from 'react'
import {Route} from 'react-router-dom'
import Layout from '../../layout'

const UnauthenticatedRoute = ({C, layout, auth, ...rest}) => {
	return (
		<Route {...rest}>
			<Layout name={layout}>
				<C />
			</Layout>
		</Route>
	)
}

export default UnauthenticatedRoute
