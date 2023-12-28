import { useImmer } from "use-immer";
import { useKeyGen } from "../hooks";
import { useState } from "react";

type User = string[];
type UserProps = {
	name: string;
	user: User;
	deleteUser: (user: User) => void;
	updateUser: (user: User, name: string) => void;
};

function User({ name, user, deleteUser, updateUser }: UserProps) {
	// const keyGen = useKeyGen();
	// console.log(typeof keyGen.getKey(user));
	const [edit, setEdit] = useState(false);
	const [userName, setUserName] = useState(name);
	const handleSave = () => {
		updateUser(user, userName);
		setEdit(false);
	};
	const handleKeyPress = (event: { key: string }) => {
		if (event.key === "Enter") {
			// Perform the action you want when the Enter key is pressed
			console.log("Enter key was pressed");
			// You can call a function, submit a form, etc.
		}
	};
	const itemStyle = {
		padding: 8,
		display: "flex",
		width: "300px",
		alignItems: "center",
		justifyContent: "space-between",
	};
	return (
		<li style={itemStyle}>
			{!edit ? (
				<div
					style={{
						display: "flex",
						width: "100%",
						justifyContent: "space-between",
					}}
				>
					<div>User: {name}</div>
					<button onClick={() => setEdit((prevState) => !prevState)}>
						edit
					</button>
				</div>
			) : (
				<div
					style={{
						display: "flex",
						width: "100%",
						justifyContent: "space-between",
					}}
				>
					<input
						type="text"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
					/>
					<button onKeyDown={handleKeyPress} onClick={handleSave}>
						save
					</button>
				</div>
			)}
			<button style={{ marginLeft: 8 }} onClick={() => deleteUser(user)}>
				delete
			</button>
		</li>
	);
}

function RefKeyTesting() {
	const [state, setState] = useImmer({
		inputValue: "",
		users: [["John"], ["Mary"], ["Luke"]],
	});
	const keyGen = useKeyGen();
	// const users = [{ name: "John" }, { name: "Mary" }, { name: "Luke" }];
	// const usersTuple = [["John"], ["Mary"], ["Luke"]];
	const handleAddUser = () => {
		setState((draft) => {
			const newUser = [state.inputValue];
			draft.users.push(newUser);
			draft.inputValue = "";
		});
	};
	const handleDeleteUser = (user: User) => {
		setState((draft) => {
			const idx = state.users.indexOf(user); // 👈👈👈
			draft.users.splice(idx, 1);
		});
	};
	const handleUpdateUser = (user: User, name: string) => {
		setState((draft) => {
			const idx = state.users.indexOf(user); // 👈👈👈

			draft.users[idx].pop(); // 👈👈👈
			draft.users[idx].push(name); // 👈👈👈
		});
	};

	return (
		<>
			<input
				type="text"
				value={state.inputValue}
				onChange={(e) =>
					setState((draft) => {
						draft.inputValue = e.target.value;
					})
				}
			/>
			<button onClick={handleAddUser}>Add User</button>
			{/*<ul>*/}
			{/*	{users.map((user, index) => (*/}
			{/*		<User key={keyGen.getKey(user)} name={user.name} />*/}
			{/*	))}*/}
			{/*</ul>*/}
			<ul
				style={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					width: "300px",
					margin: "auto",
				}}
			>
				{state.users.map((user, index) => (
					<User
						key={keyGen.getKey(user)}
						name={user[0]}
						user={user}
						deleteUser={handleDeleteUser}
						updateUser={handleUpdateUser}
					/>
				))}
			</ul>
		</>
	);
}

export default RefKeyTesting;
