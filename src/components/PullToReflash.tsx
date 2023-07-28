import React, { useEffect, useRef, useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { PullToRefresh } from "antd-mobile";
import { sleep } from "antd-mobile/es/utils/sleep";
import { lorem } from "../utils";
import styled from "styled-components";
import { useMeasure } from "react-use";
import EmptyBlock from "./EmptyBlock";

function getNextData() {
	const ret: string[] = [];
	for (let i = 0; i < 18; i++) {
		ret.unshift(lorem.generateWords(1));
	}
	return ret;
}

const PullToRefreshComponent = () => {
	const [data, setData] = useState(() => getNextData());
	const [listRef, { height }] = useMeasure<HTMLDivElement>();
	const listBodyRef = useRef<HTMLDivElement>(null);
	const [dynamicHeight, setDynamicHeight] = useState(0);
	// @ts-ignore
	const topElementRef: React.MutableRefObject<HTMLDivElement> =
		useRef<HTMLDivElement>(null);
	const [topPosition, setTopPosition] = useState({
		x: 0,
		y: 0,
	});
	useEffect(() => {
		console.log({ topY: topPosition.y, height });
		console.log(topPosition.y);
	}, [height, topPosition.y]);

	// trace top element

	useScrollPosition(
		({ currPos }) => {
			setTopPosition(currPos);
		},
		[],
		topElementRef,
		false,
		500,
		// @ts-ignore
		listBodyRef,
	);

	return (
		<PullToRefresh
			onRefresh={async () => {
				await sleep(1000);
				setData([...getNextData(), ...data]);
			}}
		>
			<ListBody ref={listBodyRef} id={"ContainerElementID"}>
				<div ref={listRef}>
					<EmptyBlock height={0} ref={topElementRef} />
					{data.map((item, index) => (
						<div
							style={{
								height: 40,
								borderBottom: "1px solid red",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
							key={index}
						>
							{item}
						</div>
					))}
				</div>
			</ListBody>
		</PullToRefresh>
	);
};
export default PullToRefreshComponent;

PullToRefreshComponent.displayName = "PullToRefreshComponent";

const ListBody = styled.div`
	height: 700px;
	overflow-y: auto;
`;
