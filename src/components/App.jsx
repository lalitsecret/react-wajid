import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Cart from './Cart'
import Orders from './Orders'
import Checkout from './Checkout'
import Profile from './Profile'
import Logout from './Logout'
import Details from './Details'
import Errpage from './Errpage'
import Footer from './Footer'


import NotAllowed from './NotAllowed'
function App()
{
	return <BrowserRouter>
		<Header/>
		<div className="container">
			<Switch>
				<Route exact path={["/","/Home"]} component={Home} />
				<Route exact path="/Login" component={Login} />
				<Route exact path="/Signup" component={Signup} />
				<Route exact path="/Details/:id" component={Details} />
			
				<NotAllowed exact path="/Cart" component={Cart} />
				<NotAllowed exact path="/Orders" component={Orders} />
				<NotAllowed exact path="/Checkout" component={Checkout} />
				<NotAllowed exact path="/Profile" component={Profile} />
				<NotAllowed exact path="/Logout" component={Logout} />
				<Route component={Errpage} />
			</Switch>
		</div>
		<Footer/>
	</BrowserRouter>
}
export default App