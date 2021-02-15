import React from 'react';
// import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendCard from './FriendCard';

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
			<div className="friends-container">
				<FriendCard />
			</div>
		);
	}
}

export default FriendsList;
