import React, { ChangeEvent, RefObject } from "react";

interface ClassComponentState {
	employees: string[];
	message: string;
}

class ClassComponent extends React.Component<{}, ClassComponentState> {
	private readonly inputRef: RefObject<HTMLInputElement>;

	constructor(props: {}) {
		super(props);
		this.state = {
			employees: ["john", "Adam", "Jane"],
			message: "",
		};
		this.inputRef = React.createRef();
	}

	getEmployeeName(name: string): string {
		// return this.state.employees.includes(name)
		// 	? `Employee ${name} exists`
		// 	: `Employee ${name} does not exist`;
		name = name.toLowerCase();
		if(this.state.employees.some(x=>x.toLowerCase() === name)) return `Employee ${name} exists`;
		return `Employee ${name} does not exist`;
	}

	handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
		this.setState({ message: "" });
	};

	handleButtonClick = (): void => {
		const inputValue = this.inputRef.current?.value || "";
		this.setState({
			message: this.getEmployeeName(inputValue),
		});
	};

	render() {
		return (
			<div style={{ margin: "200px" }}>
				<input
					type="text"
					ref={this.inputRef}
					onChange={this.handleInputChange}
					onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>) => {
						if (e.key === "Enter") {
							this.handleButtonClick();
						}
					}}
				/>
				<button onClick={this.handleButtonClick}>Check Employee</button>
				<div>{this.state.message}</div>
			</div>
		);
	}
}

export default ClassComponent;
