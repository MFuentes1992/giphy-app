import React from "react";
import "./App.css";
import { ViewPort } from "./modules/ViewPort/ViewPort";

function App() {
	return (
		<div className='App'>
			<h1 style={{ color: "green", margin: "auto" }}>GIF APP</h1>
			<ViewPort />
		</div>
	);
}

export default App;
