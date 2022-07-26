import React, {useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import UsersList from './UsersList';

let usersList = [];

const AddUser = () => {

	const [users, setUsers] = useState([]);
	const [name, setName] = useState("");
	const [age, setAge] = useState(0);
	
	const addUsers = (newUser) => {
		const tempUsers = [...users];
		tempUsers.push(newUser);
		setUsers([...tempUsers]);
		usersList = [...tempUsers];
	},
	validateInputs = (inputs) => {
		if(inputs?.name?.length > 0 && inputs?.age > 0) { //I could check if typeof name is "string" but given JavaScripts capability in handling the situation, it is not needed in this exercise 
			return true;
		} else {
			return false;
		}
	},
	handleSubmitForm = (e) => {

		e.preventDefault();
		const newUser = {
			name, 
			age
		};

		if(validateInputs(newUser)) { //if validate
			addUsers(newUser); // add the user to the list.
		};

	},
	handlechangeName = (e) => {
		setName(e.target.value);
	},
	handlechangeAge = (e) => {
		setAge(e.target.value);
	}

	return (
		<div>
			<Card className={classes.card}>
				<form onSubmit={(e) => {handleSubmitForm(e)}} className={classes.form}>
					<label htmlFor="username">Username</label>
					<input 
						id="username" 
						type="text" 
						value={name} 
						onChange={(e) => handlechangeName(e)} 
					/>
					<label htmlFor="age">Age (Years)</label>
					<input 
						id="age" 
						type="number" 
						value={age} 
						onChange={(e) => handlechangeAge(e)} 
					/>
					<Button type="submit" className={classes.submit}>
						Add User
					</Button>
				</form>
			</Card>
			{usersList.length > 0 ? <UsersList users={usersList} /> : <></>}
		</div>
	);
};

export default AddUser;
