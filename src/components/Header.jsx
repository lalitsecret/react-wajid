import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {_mydata} from  '../utils/index'
function App()
{
	let state=useSelector(state1=>state1)
	let dispatch=useDispatch()

	let {loggedin,user,cart,orders}=state

	let mycart=_mydata(cart,user)
	let myorders=_mydata(orders,user)


	return <header>
		<div className="item">
			<h1>{state.title}</h1>
		</div>
		<div className="item">
			<Link to="/">Home</Link>
			{!loggedin && <Link to="/Login">Login</Link>}
			{!loggedin && <Link to="/Signup">Signup</Link>}
			{loggedin && <Link to="/Cart">Cart ({mycart.length})</Link>}
			{loggedin && <Link to="/Orders">Orders ({myorders.length})</Link>}
			{loggedin && <Link to="/Checkout">Checkout</Link>}
			{loggedin && <Link to="/Profile">Profile</Link>}
			{loggedin && <Link onClick={e=>dispatch({type:"logout"})} to="/Login">Logout {state.user.name}</Link>}
		</div>
	</header>
}
export default App