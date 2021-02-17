import React from 'react';
// import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendCard from './FriendCard';
import AddFriendForm from './AddFriendForm';

class FriendsList extends React.Component {
	// ?? state
	state = {
		friends: [],
	};

	// ?? ComponentDidMount
	componentDidMount() {
		this.getData();
	}

	// ?? getData - axiosWithAuth
	getData = () => {
		axiosWithAuth()
			.get('/friends')
			.then((res) => {
				console.log('friends list =====> ', res.data);
				this.setState({
					friends: res.data,
				});
			})
			.catch((err) =>
				console.error('ERROR LOADING FRIENDS LIST', err.message)
			);
	};

	render() {
		return (
			<div>
				<FriendCard />
				<AddFriendForm />
			</div>
		);
	}
}

export default FriendsList;
