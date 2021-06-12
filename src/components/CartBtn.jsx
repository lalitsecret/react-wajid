import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {_qty,_existsInCart,_findCurrentCart} from '../utils'
function App(props)
{
	let state=useSelector(state1=>state1)
	let dispatch=useDispatch()
	let {product}=props
	let pid=product.id
	let {loggedin,user,cart}=state

	const addtocart=e=>{

		if(_existsInCart(cart,product,user))
		{
				// +1
				let {id,qty}=_findCurrentCart(cart,product,user)
				qty=qty+1
				cart=cart.map(x=>x.id===id?({...x,qty}):x)
				dispatch({type:"cart",payload:cart})	

		}
		else
		{
			// qty 1
			let ob={
				...user,
				...product,
				pid:product.id,
				uid:user.id,
				qty:1,
				id:cart.length+1
			}
			cart=[...cart,ob]
			dispatch({type:"cart",payload:cart})	
		}
	}

	if(loggedin)
	{
		return <div 
					onClick={addtocart}	
					className="cart-btn">
					 <i className="fa fa-shopping-cart"></i>
					 {"  "}
					 {_qty(cart,user,pid)} 
				</div>
	}
	else
	{
		return null
	}
}
export default App