import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
	const deleteHandler = (id) => {
		setTodos(todos.filter((el) => el.id !== todo.id));
	};
	const completeHandler = () => {
		setTodos(
			todos.map((el) => {
				if (el.id === todo.id) {
					return { ...el, completed: !el.completed };
				}
				return el;
			})
		);
	};
	return (
		<div className="todoList">
			<li className={`todo-item ${todo.completed ? "completed" : ""}`}>
				{text}
			</li>
			<button className="complete" onClick={completeHandler}>
				completed
			</button>
			<button className="delete" onClick={deleteHandler}>
				delete
			</button>
		</div>
	);
};
export default Todo;
