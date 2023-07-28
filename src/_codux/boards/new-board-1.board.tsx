import { createBoard } from "@wixc3/react-board";

export default createBoard({
	name: "New Board 1",
	Board: () => (
		<div
			className="out"
			style={{ width: 100, height: 100, display: "block" }}
		>
			<h1
				style={{
					fontSize: "1rem",
					textAlign: "center",
					position: "absolute",
					left: "50%",
					fontFamily: "Didot, serif",
					border: "1px solid #DBCACA",
					color: "#fff",
					transform: "translateX(-50%)",
					borderRadius: "8px",
				}}
			>
				Heading 1
			</h1>
			<img
				src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
				style={{
					height: "100%",
					width: "100%",
					objectFit: "cover",
					objectPosition: "center",
					borderRadius: "12px",
					border: "0px solid black",
				}}
			/>
		</div>
	),
	environmentProps: {
		windowBackgroundColor: "#ffffff",
	},
});
