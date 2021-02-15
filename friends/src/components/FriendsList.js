import React from 'react';
// import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/axiosWithAuth';

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
				console.log('friends list =====> ', res);
				this.setState({
					friends: res.data,
				});
			})
			.catch((err) =>
				console.error('ERROR LOADING FRIENDS LIST', err.message)
			);
	};
}

export default FriendsList;
