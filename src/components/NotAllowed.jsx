import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
function App(props)
{
	let loggedin=useSelector(state=>state.loggedin)

	if(loggedin)
	{
		return <Route {...props} />
	}
	else
	{
		return <Redirect to="/Login"/>
	}

}
export default App