import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const AddFriendForm = () => {
	const history = useHistory();

	const friendInfo = {
		name: '',
		age: '',
		email: '',
		id: Date.now(),
	};

	const [friendData, setFriendData] = useState(friendInfo);

	const handleChanges = (e) => {
		setFriendData({ ...friendData, [e.target.name]: e.target.value });
	};

	const addFriend = (friend) => {
		// e.preventDefault();
		// setFriendData({ ...friendData });
		axiosWithAuth()
			.post('/friends', friend)
			.then((res) => {
				setFriendData({ ...friendData, friend });
			})
			.catch((err) =>
				console.error('ERROR CREATING FRIEND', err.message)
			);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addFriend(friendData);
		history.push('/friends');
	};
	// setFriendData({
	// 	name: '',
	// 	age: '',
	// 	email: '',
	// });

	return (
		<>
			<div>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="name"
						placeholder="name"
						value={friendData.name}
						onChange={handleChanges}
					/>
					<input
						type="text"
						name="age"
						placeholder="age"
						value={friendData.age}
						onChange={handleChanges}
					/>
					<input
						type="email"
						name="email"
						placeholder="email"
						value={friendData.email}
						onChange={handleChanges}
					/>
					<button>Add Friend</button>
				</form>
			</div>
		</>
	);
};

export default AddFriendForm;
