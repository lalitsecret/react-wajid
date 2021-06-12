import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {_mydata,_subtotal} from  '../utils/index'
function App()
{
	let state=useSelector(state1=>state1)
	let dispatch=useDispatch()
	let {user,orders}=state
	let myorders=_mydata(orders,user)
	let subtotal=_subtotal(myorders)

	return <div className="wrapper">
		<h1>My orders {myorders.length}</h1>
		<h2>Subtotal: {subtotal}</h2>
		<table cellPadding={10} cellSpacing={0}>
			<thead>
				<tr>
					<th>sno</th>
					<th>product</th>
					<th>price</th>
					<th>qty</th>
				</tr>
			</thead>
			<tbody>
				{myorders.map(x=>
					<tr key={x.id}>
						<td>{x.id}</td>
						<td>
							<img width="50" src={x.image} alt=""/>
						</td>
						<td>{Math.ceil(x.new*x.qty*x.discount/100)}</td>
						<td>
							{x.qty}
						</td>
					</tr>
					
				)}
			</tbody>
		</table>
	</div>
}
export default App