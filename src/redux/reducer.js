import data from './data'
import users from './users'
const intialState={
	title:"Ecommerce",
	author:"Demo",
	products:data.products,
	tags:data.tags,
	filters:["id","old","new","rating","discount"],
	users:users,
	cart:[],
	orders:[],
	user:{},
	loggedin:false,
	col:"id",
	order:true,
	search:"",
	tagname:""
}


function reducer(state=intialState,action)
{
	console.log(action)

	switch(action.type)
	{
		case "tagname":
			return {
				...state,
				tagname:action.payload
			}
		case "col":
			return {
				...state,
				col:action.payload,
				order:!state.order
			}	
		case "search":
			return {
				...state,
				search:action.payload
			}	
		case "signup":
			return {
				...state,
				users:action.payload
			}	
		case "login":
			return {
				...state,
				user:action.payload,
				loggedin:true
			}	
		case "logout":
			return {
				...state,
				user:{},
				loggedin:false
			}	
		case "cart":
			return {
				...state,
				cart:action.payload,
			}	

		case "orders":
			return {
				...state,
				orders:action.payload,
			}	

			
		case "user":
			return {
				...state,
				user:action.payload
			}	

		case "users":
			return {
				...state,
				users:action.payload
			}	
		default:
			return state
	}
}

export default reducer