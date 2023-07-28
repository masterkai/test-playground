import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { PullToRefreshPage } from "./pages/PullToRefreshPage";
import TestingReactQuery from "./pages/TestingReactQuery";

function sayHi() {
	let a: number = 10;

	console.log(a);
}

function App() {
	sayHi();
	return (
		<div className="App">
			<ul>
				<li>
					<Link to={"/"}>Pull2Refresh</Link>
				</li>
				<li>
					<Link to={"/testing-react-query"}>
						ReactQueryPlayground
					</Link>
				</li>
			</ul>
			<Routes>
				<Route path={"/"} element={<PullToRefreshPage />} />
				<Route
					path={"/testing-react-query"}
					element={<TestingReactQuery />}
				/>
			</Routes>
		</div>
	);
}

export default App;
