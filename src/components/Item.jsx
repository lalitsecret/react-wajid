import React from 'react'
import Rating from './Rating'
import CartBtn from './CartBtn'
import {useSelector,useDispatch} from 'react-redux'
function App(props)
{
	let {product}=props
	let state=useSelector(state1=>state1)
	let dispatch=useDispatch()

	let {loggedin}=state
	return <div className="item">
		<img width="100" src={product.image} alt=""/>
		<div>{product.title}</div>
		<div>{product.old}</div>
		<div>{product.new}</div>
		<Rating num={product.rating} />
		<div className="discount">{product.discount} % off</div>
		<div className="tags">{product.tags}</div>
		<CartBtn product={product} />
	</div>
}
export default App