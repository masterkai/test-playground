import React, { useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { usePrevious } from "react-use";
import { useImmer } from "use-immer";

const Index = () => {
	const [value, setValue] = React.useState(0);
	const [count, setCount] = React.useState(0);
	const [number, setNumber] = React.useState(0);
	const [array, setArray] = React.useState<number[]>([]);
	const [idx, setIdx] = useImmer<number>(0);
	const prevArray = usePrevious(array);
	const handleClick = () => {
		setNumber(Math.floor(Math.random() * value) + 1);
	};
	const handleFortunProcess = () => {
		setArray((prev) => {
			const prevArr = [...prev];
			const randomIndex = Math.floor(Math.random() * prevArr.length) + 1;
			setIdx(randomIndex);
			prevArr.splice(randomIndex, 1);
			return prevArr;
		});
	};
	const handleReset = () => {
		const arr = Array.from({ length: value }, (_, idx) => idx);
		setArray(arr);
	};
	const handleButtonClick = () => {
		setCount(count + 1);
		setCount(count + 1);
	};
	useEffect(() => {
		const arr = Array.from({ length: value }, (_, idx) => idx);
		setArray(arr);
	}, [value]);
	return (
		<>
			<div>Random Number</div>
			<Box
				component="form"
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					textAlign: "center",
					"& > :not(style)": { m: 1, width: "25ch" },
				}}
				noValidate
				autoComplete="off"
			>
				<TextField
					type={"number"}
					id="outlined-basic"
					label="Outlined"
					variant="outlined"
					value={value}
					onChange={(e) => setValue(+e.target.value)}
				/>
				<Typography variant="h1" gutterBottom>
					Random Number is：{number.toString()}
				</Typography>
				<Button variant="outlined" onClick={handleClick}>
					<ArrowRightIcon />
					GENERATE
				</Button>
				<Button variant="outlined" onClick={handleButtonClick}>
					Count: {count.toString()}
				</Button>

				<Typography variant="h1" gutterBottom>
					[{array.toString()}]
				</Typography>
				<Button variant="outlined" onClick={handleFortunProcess}>
					pick out your fortune
				</Button>
				<Typography variant="h1" gutterBottom>
					👉👉 {prevArray?.length ? prevArray[idx] : "none"}
				</Typography>
				<Button variant="outlined" onClick={handleReset}>
					Reset
				</Button>
			</Box>
		</>
	);
};

export default Index;

Index.displayName = "RandomNumber";
