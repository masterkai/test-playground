import React from "react";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Draggable from "react-draggable";

const boxStyle = {
	border: "green solid 2px",
	borderRadius: "10px",
	padding: "5px",
};
const miniBoxStyle = {
	width: "33.33%",
	border: "grey solid 2px",
	borderRadius: "10px",
	padding: "5px",
};

interface DBoxProps {
	id: string;
}

const DraggableBox = ({ id }: DBoxProps) => {
	const updateXarrow = useXarrow();
	return (
		<Draggable onDrag={updateXarrow} onStop={updateXarrow}>
			<div id={id} style={miniBoxStyle}>
				{id}
			</div>
		</Draggable>
	);
};

export function V2Example() {
	return (
		<div style={boxStyle}>
			<Xwrapper>
				<DraggableBox id={"elem1"} />
				<DraggableBox id={"elem2"} />
				<Xarrow start={"elem1"} end="elem2" />
			</Xwrapper>
		</div>
	);
}
