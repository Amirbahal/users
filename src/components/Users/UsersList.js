import React from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = ({users}) => {
	return (
		<Card className={classes.users}>
			{
				<ul>
				{	
					users.map((user, i) => {
						const year = (user.age > 1) ? "years" : "year";
						return <li key={i}>{`${user.name} (${user.age} ${year} old)`}</li>
					})
				}
				</ul>
			}
			
		</Card>
	);
};

export default UsersList;
