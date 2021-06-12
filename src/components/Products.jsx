import React from 'react'
import {useSelector} from 'react-redux'
import Item from './Item'
function App()
{
	let state=useSelector(state1=>state1)

	let {products,tagname,col,order,search}=state

	products=products.filter(x=>x.tags.startsWith(tagname))
	products=products.filter(x=>Object.values(x).join("").includes(search))
	products=products.sort((x,y) =>order?(x[col]-y[col]):(y[col]-x[col]))

	return <div className="products">
		{products.map(product=><Item product={product} key={product.id} />)}
	</div>
}
export default App