import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { PullToRefreshPage } from "./pages/PullToRefreshPage";
import TestingReactQuery from "./pages/TestingReactQuery";
import TestingTextInputComponent from "./pages/TestTextInputComponent";
import { V2Example } from "./pages/ReactXarrows";
import RefKeyTesting from "./pages/RefKeyTesting";
import AutoCompleteTest from "./pages/AutoCompleteTest";
import DigitalClock from "./pages/DigitalClock";
import RandomNumber from "./pages/RandomNumber";
import HowMuchTimeIsLeft from "./pages/HowMuchTimeIsLeft";
import CoverLetter from "./pages/CoverLetter";

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
				<li>
					<Link to={"/react-xarrows"}>react-xarrows</Link>
				</li>
				<li>
					<Link to={"/testing-text-input"}>TextInputPlayground</Link>
				</li>
				<li>
					<Link to={"/testing-obj-ref-key"}>testing-obj-ref-key</Link>
				</li>
				<li>
					<Link to={"/testing-auto-complete"}>
						testing-auto-complete
					</Link>
				</li>
				<li>
					<Link to={"/digital-clock"}>digital-clock</Link>
				</li>
				<li>
					<Link to={"/random-number"}>random-number</Link>
				</li>
				<li>
					<Link to={"/how-much-time-is-left"}>
						how-much-time-is-left
					</Link>
				</li>
				<li>
					<Link to={"/cover-letter"}>
						cover-letter
					</Link>
				</li>
			</ul>
			<Routes>
				<Route path={"/"} element={<PullToRefreshPage />} />
				<Route
					path={"/testing-react-query"}
					element={<TestingReactQuery />}
				/>
				<Route
					path={"/how-much-time-is-left"}
					element={<HowMuchTimeIsLeft />}
				/>
				<Route path={"/random-number"} element={<RandomNumber />} />
				<Route
					path={"/testing-text-input"}
					element={<TestingTextInputComponent />}
				/>
				<Route path={"/react-xarrows"} element={<V2Example />} />
				<Route
					path={"/testing-obj-ref-key"}
					element={<RefKeyTesting />}
				/>
				<Route
					path={"/testing-auto-complete"}
					element={<AutoCompleteTest />}
				/>
				<Route path={"/digital-clock"} element={<DigitalClock />} />
				<Route path={"/cover-letter"} element={<CoverLetter />} />
			</Routes>
		</div>
	);
}

export default App;
