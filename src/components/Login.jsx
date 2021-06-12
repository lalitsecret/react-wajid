import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {_login,_user} from '../utils'
function App(props)
{

	let [ob,setob]=React.useState({email:"",password:""})

	let state=useSelector(state1=>state1)
	let dispatch=useDispatch()

	let {users}=state

	const handleSubmit=e=>{
		e.preventDefault()
		if(_login(users,ob)===false)
		{
			alert("failed to login - no such record with us")
		}
		else
		{
			alert("login success")
			const payload=_user(users,ob)
			dispatch({type:"login",payload})
			props.history.push("/")
		}
	}

	return <form onSubmit={handleSubmit} className="form">
		<h3>Login</h3>
		<p>email</p>
		<div className="form-flex">
			<input 
			 value={ob.email}
			 placeholder="email" 
			 onChange={e=>setob({...ob,email:e.target.value})}	
			 />
			<i className="fa fa-envelope"></i>
		</div>
		<p>password</p>
		<div className="form-flex">
			<input 
			 value={ob.password}
			 placeholder="password" 
			 onChange={e=>setob({...ob,password:e.target.value})}	
			 />
			<i className="fa fa-lock"></i>
		</div>
		<button>Login <i className="fa fa-users"></i></button>
	</form>
}
export default App