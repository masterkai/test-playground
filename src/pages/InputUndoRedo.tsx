import * as React from "react";
import { useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useImmer } from "use-immer";

type Inputs = string[];
export default function InputUndoRedo() {
	const [currIdx, setCurrIdx] = useImmer<number>(0);
	const [inputs, setInputs] = useImmer<Inputs>([""]);
	const [value, setValue] = useImmer<string>("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputs((draft)=>{
			draft.length = currIdx + 1;
			draft.push(e.target.value);
			return draft;
		});
		setCurrIdx((draft) => draft + 1);
	};
	const handleUndo = () => {
		if(currIdx <= 0) return;
		setCurrIdx((draft) => {
			return draft - 1;
		});


	};
	const handleRedo = () => {
		if(currIdx >= inputs.length - 1) return;
		setCurrIdx((draft) => draft + 1);
	};
	useEffect(() => {
		console.log(inputs);
	}, [inputs]);
	useEffect(() => {
		setValue(inputs[currIdx]);
	}, [currIdx]);

	return (
		<Box
			component="form"
			sx={{
				"& > :not(style)": { m: 1, width: "35ch", height: "56px" },
				p: 5,
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			}}
			noValidate
			autoComplete="off"
		>
			<TextField
				id="outlined-basic"
				label="Outlined"
				variant="outlined"
				sx={{ flex: "1 1 60%" }}
				value={value}
				onChange={handleChange}
			/>
			<Button onClick={handleUndo} sx={{ flex: "0 1 20%" }} variant="outlined">
				Undo
			</Button>
			<Button onClick={handleRedo} sx={{ flex: "0 1 20%" }} variant="outlined">
				Redo
			</Button>
		</Box>
	);
}