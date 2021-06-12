import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {_mydata,_subtotal} from  '../utils/index'
function App()
{
	let state=useSelector(state1=>state1)
	let dispatch=useDispatch()
	let {user,cart}=state
	let mycart=_mydata(cart,user)
	let subtotal=_subtotal(mycart)


	const updateQty=(id,qty) =>{
		cart=cart.map(x=>x.id===id?({...x,qty}):x)
		dispatch({type:"cart",payload:cart})
		// alert("cart qty updated")
	}
	const removeFromCart=id=>{
		cart=cart.filter(x=>x.id!==id)
		dispatch({type:"cart",payload:cart})
		// alert("rmeoved from cart success")

	}
	return <div className="wrapper">
		<h1>My cart {mycart.length}</h1>
		<h2>Subtotal: {subtotal}</h2>
		<table cellPadding={10} cellSpacing={0}>
			<thead>
				<tr>
					<th>sno</th>
					<th>product</th>
					<th>price</th>
					<th>qty</th>
					<th>actions</th>
				</tr>
			</thead>
			<tbody>
				{mycart.map(x=>
					<tr key={x.id}>
						<td>{x.id}</td>
						<td>
							<img width="50" src={x.image} alt=""/>
						</td>
						<td>{Math.ceil(x.new*x.qty*x.discount/100)}</td>
						<td>
							<button disabled={x.qty<2} onClick={e=>updateQty(x.id,x.qty-1)}>-</button>
							{x.qty}
							<button  onClick={e=>updateQty(x.id,x.qty+1)}>+</button>
						</td>
						<td>
							<button onClick={e=>removeFromCart(x.id)}><i className="fa fa-trash-o"></i></button>
						</td>
					</tr>
					
				)}
			</tbody>
		</table>
	</div>
}
export default App