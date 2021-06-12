import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function App(props)
{
	let state=useSelector(state1=>state1)
	let dispatch=useDispatch()
	let {num}=props


	return <div>
		<i style={{color:1<=num?'orange':'silver'}} className="fa fa-star"></i>
		<i style={{color:2<=num?'orange':'silver'}} className="fa fa-star"></i>
		<i style={{color:3<=num?'orange':'silver'}} className="fa fa-star"></i>
		<i style={{color:4<=num?'orange':'silver'}} className="fa fa-star"></i>
		<i style={{color:5<=num?'orange':'silver'}} className="fa fa-star"></i>
	</div>
}
export default App