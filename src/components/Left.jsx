import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function App()
{
	let state=useSelector(state1=>state1)
	let dispatch=useDispatch()
	let {tags,tagname}=state

	const handleClick=payload=>{
		dispatch({type:"tagname",payload:payload})
	}

	return <div className="left">
		{tags.map(item=>
			<p
			key={item.t}
			onClick={e=>handleClick(item.t)}
			className={item.t===tagname?'active':''}
			>{item.t} <span>{item.c}</span></p>
		)}
	</div>
}
export default App