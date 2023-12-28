import { createBoard } from "@wixc3/react-board";
import Clock from "../../components/clock/Clock.jsx";
import TestTextInputComponent from "../../pages/TestTextInputComponent";

export default createBoard({
	name: "New Board 2",
	Board: () => (
		<div>
			<Clock />
			<TestTextInputComponent />
		</div>
	),
	isSnippet: true,
	environmentProps: {
		canvasWidth: 350,
		windowWidth: 1022,
	},
});
