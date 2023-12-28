import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { allGames } from "../data";

const options = allGames;
type ListItem = {
	label: string;
	value: string;
};
export default function AutoCompleteTest() {
	const [value, setValue] = React.useState<ListItem | null>(options[0]);
	const [inputValue, setInputValue] = React.useState("");
	console.log(value);

	return (
		<div style={{ width: 300, margin: "auto" }}>
			<div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
			<div>{`inputValue: '${inputValue}'`}</div>
			<br />
			<Autocomplete
				value={value}
				onChange={(event: any, newValue: ListItem | null) => {
					setValue(newValue);
				}}
				inputValue={inputValue}
				onInputChange={(event, newInputValue) => {
					setInputValue(newInputValue);
				}}
				id="controllable-states-demo"
				options={options}
				sx={{ width: 300 }}
				renderInput={(params) => (
					<TextField {...params} label="Controllable" />
				)}
			/>
		</div>
	);
}
