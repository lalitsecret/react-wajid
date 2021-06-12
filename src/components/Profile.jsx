import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function App(props)
{
	let state=useSelector(state1=>state1)
	let dispatch=useDispatch()

	let {user,users}=state


	const changePassword= () =>{
		let newPassword=prompt("enter new password your old password was: ",user.password)

		if(newPassword)
		{
			if(newPassword===user.password)
			{
				alert("new password can't be your previous password")
			}
			else
			{
				user={...user,password:newPassword}
				dispatch({type:"user",payload:user})
				users=users.map(x=>x.id===user.id?user:x)
				dispatch({type:"users",payload:users})
				alert("password changed successfully now logging out from system ")
				dispatch({type:"logout"})
				props.history.push("/Login")

			}
		}
		else
		{
			alert("cancelled by user")
		}

	}

	return <div className="wrapper">
		<div className="card">
			<h1>welcome : {user.name}</h1>
			<h2>email: {user.email}</h2>
			<h2>phone: {user.phone}</h2>
			<h2>password: {user.password}</h2>
			<button onClick={changePassword}>Change Password <i className="fa fa-key"></i></button>
		</div>
	</div>
}
export default App