import React from 'react'
import {useSelector} from 'react-redux'
function App()
{
	let state=useSelector(state1=>state1)

	return <footer>crafted by {state.author}</footer>
}
export default App