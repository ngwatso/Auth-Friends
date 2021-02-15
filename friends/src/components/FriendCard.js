import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Spinner } from 'bootstrap';

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
					{/* <Spinner variant="primary" animation="grow" /> */}
					<p>Loading data, one moment...</p>
				</div>
			) : (
				<div className="friends-container">
					<h2>Welcome to Central Perk!</h2>
					<div className="card-container">
						{friendData.map((friend) => {
							return (
								<div
									className="friend-card"
									key={friend.id}
								>
									<div className="friend-name">
										Name: {friend.name}
									</div>
									<div className="friend-age">
										Age: {friend.age}
									</div>
									<div className="friend-email">
										Email: {friend.email}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
};

export default FriendCard;
