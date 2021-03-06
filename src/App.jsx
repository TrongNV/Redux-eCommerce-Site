import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "components/Navigation";
// import PRODUCTS from "json/products.json";
import Home from "pages/Home";
import All from "pages/All";
import Detail from "pages/Detail";
import Cart from "pages/Cart";
import Checkout from "pages/Checkout";
import Success from "pages/Success";
import FourOhFour from "pages/404";


import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "reducers";

const store = createStore(reducers, applyMiddleware(reduxThunk));

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div>
						<Navigation/>
						<Switch>
							<Route exact path="/" component={Home}/>
							<Route exact path="/All" component={All}/>
							<Route exact path="/Checkout" component={Checkout}/>
							<Route exact path="/Cart" component={Cart}/>
							<Route exact path="/Detail/:productId" component={Detail}/>
							<Route exact path="/Success" component={Success}/>
							<Route exact path= "*" component={FourOhFour} />
						</Switch>
					</div>
				</BrowserRouter>
			</Provider>

		);
	}
}

export default App;
