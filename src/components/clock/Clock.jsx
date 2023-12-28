import React, { useEffect, useState } from "react";
import styled from "styled-components";

// eslint-disable-next-line @typescript-eslint/typedef
function computeDegree(minValue, maxValue, value) {
	const maxDegree = 360;
	const minDegree = 0;
	return (
		minDegree +
		((value - minValue) * (maxDegree - minDegree)) / (maxValue - minValue)
	);
}

const Container = styled.div`
	width: 350px;
	height: 350px;
	position: relative;
	// background: rgba(0, 0, 255, 1);

	img {
		position: absolute;
		display: block;
	}
`;

const Background = () => {
	// style fix
	const style = {
		marginTop: 3,
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
	};

	return (
		<img src="/assets/clock-bg.svg" style={style} alt="clock background" />
	);
};

// eslint-disable-next-line react/prop-types
const HourHand = ({ val = 0 }) => {
	const degree = computeDegree(0, 12, val);
	const zeroDegree = -90;
	const baseStyle = {
		transformOrigin: "left center",
		transform: `translateY(-50%) rotate(${degree + zeroDegree}deg)`,
		top: "50%",
		left: "50%",
	};

	return (
		<img
			style={baseStyle}
			src="/assets/hour-hand.svg"
			alt="clock hour hand"
		/>
	);
};

// eslint-disable-next-line react/prop-types
const MinuteHand = ({ val = 0 }) => {
	const degree = computeDegree(0, 60, val);
	const zeroDegree = 0;
	const baseStyle = {
		transformOrigin: "center calc(100% - 4px)",
		transform: `translate(-50%, 4px) rotate(${zeroDegree + degree}deg)`,
		bottom: "50%",
		left: "50%",
	};

	return (
		<img
			style={baseStyle}
			src="/assets/minute-hand.svg"
			alt="clock minute hand"
		/>
	);
};

const SecondHand = (() => {
	let preVal = -1;
	let count = 0;
	// eslint-disable-next-line react/prop-types,react/display-name
	return ({ val }) => {
		// let val always bigger
		if (val < preVal) {
			count++;
		}
		preVal = val;
		useEffect(
			() => () => {
				preVal = -1;
				count = 0;
			},
			[],
		);
		// compute degree
		const degree = computeDegree(0, 60, val + count * 60);
		const zeroDegree = 180;
		const baseStyle = {
			transformOrigin: "center top",
			transform: `translateX(-50%) rotate(${degree + zeroDegree}deg)`,
			top: "50%",
			left: "50%",
			transition: "all 100ms cubic-bezier(0, 2.95, 1, 1)",
		};
		// render
		return (
			<img
				style={baseStyle}
				src="/assets/second-hand.svg"
				alt="clock second hand"
			/>
		);
	};
})();

const Clock = () => {
	const [date, setDate] = useState(new Date());
	const hour = date.getHours();
	const min = date.getMinutes();
	const sec = date.getSeconds();
	const fixedHour = hour + (min + sec / 60) / 60;

	useEffect(() => {
		let key = setInterval(() => {
			setDate(new Date());
		}, 1000);
		return () => {
			clearInterval(key);
		};
	}, []);

	return (
		<Container>
			<Background />
			<HourHand val={fixedHour} />
			<MinuteHand val={min} />
			<SecondHand val={sec} />
		</Container>
	);
};

export default Clock;
