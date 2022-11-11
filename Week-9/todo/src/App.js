import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filtered, setFiltered] = useState([]);

	useEffect(() => {
		getFromLocal();
	}, []);

	useEffect(() => {
		filterHandler();
		saveToLocal();
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
	//save to localTodo
	const saveToLocal = () => {
		localStorage.setItem("todos", JSON.stringify(todos));
	};

	const getFromLocal = () => {
		if (localStorage.getItem("todos") === null) {
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			let localTodo = JSON.parse(localStorage.getItem("todos"));
			setTodos(localTodo);
		}
	};

	return (
		<div className="App">
			<header className="App-header">Naba's to-do</header>
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
