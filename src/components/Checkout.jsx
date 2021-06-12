import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {_mydata} from '../utils'
function App(props)
{


	let state=useSelector(state1=>state1)
	let dispatch=useDispatch()

	let {users,user,cart,orders}=state
	let ob=user

	const handleSubmit=e=>{
		e.preventDefault()


		orders=[...orders,..._mydata(cart,user)]
		dispatch({type:"orders",payload:orders})

		dispatch({type:"cart",payload:cart.filter(x=>x.uid!==user.id)})
		alert("checkout success")
		props.history.push("/Orders")
	}

	return <form onSubmit={handleSubmit} className="form">
		<h3>Checkout</h3>
		<p>name</p>
		<div className="form-flex">
			<input 
			 value={ob.name}
			 placeholder="name" 
			 
			 />
			<i className="fa fa-user"></i>
		</div>
		<p>email</p>
		<div className="form-flex">
			<input 
			 value={ob.email}
			 placeholder="email" 
			 
			 />
			<i className="fa fa-envelope"></i>
		</div>
		<p>phone</p>
		<div className="form-flex">
			<input 
			 value={ob.phone}
			 placeholder="phone" 
			 
			 />
			<i className="fa fa-phone"></i>
		</div>
		<p>password</p>
		<div className="form-flex">
			<input 
			 value={ob.password}
			 placeholder="password" 
			 
			 />
			<i className="fa fa-lock"></i>
		</div>
		<button>Checkout <i className="fa fa-users"></i></button>
	</form>
}
export default App