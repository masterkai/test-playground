import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import styled from "styled-components";

export default function FullBorderedGrid() {
	return (
		<Box sx={{ flexGrow: 1, p: 2 }}>
			<Grid
				container
				spacing={2}
				sx={{
					"--Grid-borderWidth": "1px",
					borderTop: "var(--Grid-borderWidth) solid",
					borderLeft: "var(--Grid-borderWidth) solid",
					borderColor: "divider",
					"& > div": {
						borderRight: "var(--Grid-borderWidth) solid",
						borderBottom: "var(--Grid-borderWidth) solid",
						borderColor: "divider",
					},
				}}
			>
				{[...Array(52)].map((_, index) => (
					<Grid
						key={index}
						{...{
							xs: 12,
							sm: 6,
							md: 4,
							lg: 3,
							display: "flex",
							justifyContent: "center",
						}}
						minHeight={40}
					>
						<div
							style={{
								width: "fit-content",
								display: "flex",
								flexWrap: "wrap",
								justifyContent: "space-between",
							}}
						>
							{[...Array(90)].map((_, index) => (
								<ToggleComponent key={index} />
							))}
						</div>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

const ToggleBlock = styled.div<{ color: string }>`
	width: 20px;
	height: 20px;
	border: 1px solid white;
	background-color: ${({ color }) => color};
`;
const ToggleComponent = () => {
	const [isOn, setIsOn] = React.useState(false);
	const toggle = () => setIsOn(!isOn);
	React.useEffect(() => {
		if (isOn) {
			console.log("on");
		} else {
			console.log("off");
		}
	}, [isOn]);
	console.log("render");
	console.log(isOn);
	const toggleBlock = (
		<ToggleBlock
			onClick={toggle}
			color={isOn ? "green" : "red"}
		></ToggleBlock>
	);
	return <>{toggleBlock}</>;
};
