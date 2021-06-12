import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {_signup} from '../utils'
function App(props)
{

	let [ob,setob]=React.useState({name:"",email:"",phone:"",password:""})

	let state=useSelector(state1=>state1)
	let dispatch=useDispatch()

	let {users}=state

	const handleSubmit=e=>{
		e.preventDefault()
		if(_signup(users,ob))
		{
			alert("failed to signup email already exists")
		}
		else
		{
			alert("signup success")
			const payload=[...users,{...ob,id:users.length+1}]	
			dispatch({type:"signup",payload})
			props.history.push("/Login")
		}
	}

	return <form onSubmit={handleSubmit} className="form">
		<h3>Signup</h3>
		<p>name</p>
		<div className="form-flex">
			<input 
			 value={ob.name}
			 placeholder="name" 
			 onChange={e=>setob({...ob,name:e.target.value})}	
			 />
			<i className="fa fa-user"></i>
		</div>
		<p>email</p>
		<div className="form-flex">
			<input 
			 value={ob.email}
			 placeholder="email" 
			 onChange={e=>setob({...ob,email:e.target.value})}	
			 />
			<i className="fa fa-envelope"></i>
		</div>
		<p>phone</p>
		<div className="form-flex">
			<input 
			 value={ob.phone}
			 placeholder="phone" 
			 onChange={e=>setob({...ob,phone:e.target.value})}	
			 />
			<i className="fa fa-phone"></i>
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
		<button>Signup <i className="fa fa-users"></i></button>
	</form>
}
export default App