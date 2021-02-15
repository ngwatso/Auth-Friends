import React from 'react';
import axios from 'axios';

class LoginForm extends React.Component {
	state = {
		credentials: {
			username: '',
			password: '',
		},
	};

	handleChanges = (e) => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value,
			},
		});
	};

	login = (e) => {
		e.preventDefault();
		axios.post('https://localhost:5000/api/login', {
			username: 'Lambda School',
			password: 'i<3Lambd4',
		})
			.then((res) => {
				localStorage.setItem('token', res.data.payload);
				this.props.history.push('/protected');
			})
			.catch((err) => console.error('ERROR LOGGING IN', err.message));
	};

	if(isLoading) {
		return <h2>Please wait, logging in...</h2>;
	}

	render() {
		return (
			<div>
				<form onSubmit={this.login}>
					<input
						text="text"
						name="username"
						placeholder="username"
						value={this.state.credentials.username}
						onChange={this.handleChanges}
					/>
					<input
						type="password"
						name="password"
						placeholder="password"
						value={this.state.credentials.password}
						onChange={this.handleChanges}
					/>
					<button>Log In</button>
				</form>
			</div>
		);
	}
}

export default LoginForm;
