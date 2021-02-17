import { useEffect } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { axiosWithAuth } from './utils/axiosWithAuth';

function App() {
	// const logout = () => {
	// 	axiosWithAuth()
	// 		.post('/logout')
	// 		.catch((err) => console.error('unable to logout'));
	// 	localStorage.removeItem('token');
	// };
	// let isLoggedIn = false;
	useEffect(() => {
		const getToken = (e) => {
			localStorage.getItem('token');
			// isLoggedIn = true;
		};

		getToken();
	}, []);

	return (
		<Router>
			<div className="App">
				<ul>
					{/* <div className="header"> */}
					<li>
						<Link to="/login">Log In</Link>
					</li>
					<li>
						<Link
							to="/login"
							onClick={localStorage.removeItem('token')}
						>
							Log Out
						</Link>
					</li>
					<li>
						<Link to="/protected">Friends List</Link>
					</li>
					<li>
						<Link to="/add-friends">Add Friends</Link>
					</li>
					{/* </div> */}
				</ul>
				<Switch>
					<PrivateRoute
						exact
						path="/protected"
						component={FriendsList}
					/>
					<Route path="/add-friends" component={AddFriendForm} />
					{/* <Route component={AddFriendForm} /> */}
					<Route path="/login" component={LoginForm} />
					{/* <Route component={LoginForm} /> */}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
