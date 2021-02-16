import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriendForm = () => {
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

	const addFriend = (e) => {
		e.preventDefault();
		setFriendData({ ...friendData });
		axiosWithAuth()
			.post('friends', friendData)
			.then((res) => {
				setFriendData(friendInfo);
			})
			.catch((err) =>
				console.error('ERROR CREATING FRIEND', err.message)
			);
	};
	setFriendData({
		name: '',
		age: '',
		email: '',
	});

	return (
		<>
			<div>
				<form onSubmit={addFriend}>
					<input
						type="text"
						name="name"
						placeholder="name"
						onChange={handleChanges}
					/>
					<input
						type="text"
						name="age"
						placeholder="age"
						onChange={handleChanges}
					/>
					<input
						type="email"
						name="email"
						placeholder="email"
						onChange={handleChanges}
					/>
					<button>Add Friend</button>
				</form>
			</div>
		</>
	);
};

export default AddFriendForm;
