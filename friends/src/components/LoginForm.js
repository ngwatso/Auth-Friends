import React from 'react';
import axios from 'axios';

class LoginForm extends React.Component {
	state = {
		credentials: {
			username: '',
			poassword: '',
		},
	};

	handleChanges = (e) => {
		this.setSteta({
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
				this.props.history.push('/');
			})
			.catch((err) => console.error('ERROR LOGGING IN', err.message));
	};

	render() {
		return (
			<div>
				<form onSubmit={this.login}>
					<input
						text="text"
						name="username"
						value={this.state.credentials.username}
						onChange={this.handleChenges}
					/>
					<input
						type="password"
						name="password"
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
