import React from "react";
import "./App.css";
import Router from "./router";
import { TodoProvider } from "./todos/todo-context";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<TodoProvider>
			<BrowserRouter>
				<div className="App">
					{/* navbar n shi goes here :):):):) :^) */}
					<Router />
				</div>
			</BrowserRouter>
		</TodoProvider>
	);
}

export default App;
