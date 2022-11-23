import React, { useState } from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
	const inputHandler = (e) => {
		setInputText(e.target.value);
	};
	const submitTodoHandler = (e) => {
		e.preventDefault();
		if (!inputText) {
			alert("enter a task");
			return;
		}
		setTodos([
			...todos,
			{
				text: inputText,
				completed: false,
				id: Math.floor(Math.random() * 1000),
			},
		]);
		setInputText("");
	};

	const statusHandler = (e) => {
		setStatus(e.target.value);
	};
	return (
		<form>
			<div className="main">
				<input
					type="text"
					className="task"
					placeholder="enter a task"
					value={inputText}
					onChange={inputHandler}
				/>
				<button className="addB" onClick={submitTodoHandler}>
					add
				</button>
				<div className="selectTask">
					<select name="todos" className="todo-filter" onChange={statusHandler}>
						<option value="all">All</option>
						<option value="completed">Completed</option>
						<option value="uncompleted">Uncompleted</option>
					</select>
				</div>
			</div>
		</form>
	);
};
export default Form;
