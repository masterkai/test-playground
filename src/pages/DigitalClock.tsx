import React from "react";
import Clock from "../components/clock/Clock";

const DigitalClock = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Clock />
		</div>
	);
};
export default DigitalClock;
