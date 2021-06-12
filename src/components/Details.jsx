import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
function App(props)
{
	let state=useSelector(state1=>state1)
	let dispatch=useDispatch()

	let {id}=props.match.params
	let {products}=state
	let ob=products.find(x=>x.id===id)

	return <div className="wrapper details">
		<h1>Details page for {id}</h1>
		<div className="flex">
			<div className="left">
				<img src={ob.image} alt=""/>
			</div>
			<div className="right">
				<h1>{ob.id}</h1>
				<h1>{ob.title}</h1>
				<h1>{ob.description}</h1>
				<h1>{ob.old}</h1>
				<h1>{ob.new}</h1>
				<h1>{ob.rating}</h1>
				<h1>{ob.discount}</h1>
				<h1>{ob.tags}</h1>
				<h1>{ob.image}</h1>
				<Link to="/">Continue Shopping</Link>
			</div>
		</div>
	</div>
}
export default App