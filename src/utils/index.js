export function _sort(a,col,order)
{
	return a.sort((x,y) =>order?(x[col]-y[col]):(y[col]-x[col]))
}

export function _tagname(a,str)
{
	return a.filter(x=>x.tags.startsWith(str))
}
export function _search(a,str)
{
	return a.filter(x=>Object.values(x).join("").includes(str))
}

export function _signup(a,ob)
{
	return a.some(x=>x.email===ob.email)
}

export function _login(a,ob)
{
	return a.some(x=>x.email===ob.email && x.password===ob.password)
}
export function _existsInCart(a,product,user)
{
	return a.some(x=>x.pid===product.id && user.id===x.uid)
}
export function _findCurrentCart(a,product,user)
{
	return a.find(x=>x.pid===product.id && user.id===x.uid)
}

export function _user(a,ob)
{
	return a.find(x=>x.email===ob.email && x.password===ob.password)
}

export function _mydata(a,user)
{
	return a.filter(x=>x.uid===user.id)
}
export function _qty(a,user,pid)
{
	if(a.some(x=>x.pid===pid && user.id===x.uid))
	{
		return a.find(x=>x.pid===pid && user.id===x.uid).qty
	}
	else
	{
		return 0
	}
}


export function _subtotal(a)
{
	if(a.length>0)
	{
		return a.map(x=>x.new*x.qty*x.discount/100).map(x=>Math.ceil(x)).reduce((sum,next) =>sum+next)
	}
	else
	{
		return 0
	}
}