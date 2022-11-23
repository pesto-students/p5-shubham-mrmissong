import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
function App() {
	const initialState = JSON.parse(localStorage.getItem("todos")) || [];
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState(initialState);
	const [status, setStatus] = useState("all");
	const [filtered, setFiltered] = useState([]);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	useEffect(() => {
		filterHandler();
	}, [todos, status]);

	const filterHandler = () => {
		switch (status) {
			case "completed":
				setFiltered(todos.filter((todo) => todo.completed === true));
				break;
			case "uncompleted":
				setFiltered(todos.filter((todo) => todo.completed === false));
				break;
			default:
				setFiltered(todos);
				break;
		}
	};

	return (
		<div className="App">
			<header className="App-header">To-do</header>
			<Form
				inputText={inputText}
				setInputText={setInputText}
				todos={todos}
				setTodos={setTodos}
				setStatus={setStatus}
			/>
			<List todos={todos} setTodos={setTodos} filtered={filtered} />
		</div>
	);
}

export default App;
