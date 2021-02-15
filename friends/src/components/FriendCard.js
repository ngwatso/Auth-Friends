import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendCard = () => {
	const [friendData, setFriendData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		axiosWithAuth()
			.get('friends')
			.then((res) => {
				console.log('friendData (FriendCard.js =====> ', res.data);
				setFriendData(res.data);
			})
			.catch((err) =>
				console.error('ERROR PULLING FRIEND DATA', err.message)
			);
	}, []);

	return (
		<div>
			{!isLoading ? (
				<div className="spinner">
					<Loader
						type="Puff"
						color="#204963"
						height="60"
						width="60"
					/>
					<p>Loading data, one moment...</p>
				</div>
			) : (
				<div>
					<h2>Welcome to Central Perk!</h2>
					{friendData.map((friend) => {
						return (
							<div className="friend-card" key={friend.id}>
								<div className="friend-name">
									{friend.name}
								</div>
								<div className="friend-age">
									{friend.age}
								</div>
								<div className="friend-email">
									{friend.email}
								</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default FriendCard;
