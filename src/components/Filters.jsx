import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function App()
{
	let state=useSelector(state1=>state1)
	let dispatch=useDispatch()
	let {col,filters,search}=state

	const handleClick=payload=>{
		dispatch({type:"col",payload})
	}
	const handleChange=e=>{
		dispatch({type:"search",payload:e.target.value})
	}

	return <div className="filters">
		{filters.map(x=>
			<button 
			key={x} 
			className={x===col?'active':''}
			onClick={e=>handleClick(x)}
			>
				<i className="fa fa-sort"></i>{x}
			</button>
		)}
		<input 
		value={search}
		onChange={handleChange}
		placeholder="search..." />
	</div>
}
export default App