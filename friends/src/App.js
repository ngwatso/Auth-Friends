import './App.css';
import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<ul>
					<li>
						<Link to="/login">Log In</Link>
					</li>
					{/* <li>
						<Link to="/login" onClick={logout}>
							Log Out
						</Link>
					</li> */}
					<li>
						<Link to="/protected">Friends List</Link>
					</li>
				</ul>
				<Switch>
					<PrivateRoute
						path="/protected"
						component={FriendsList}
					/>
					<Route path="login" component={LoginForm} />
					<Route component={LoginForm} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
