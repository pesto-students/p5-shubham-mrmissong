import React from "react";
import Todo from "./Todo";
const List = ({ todos, setTodos, filtered }) => {
	return (
		<div>
			<ul className="taskList">
				{filtered.map((todo) => (
					<Todo
						todos={todos}
						setTodos={setTodos}
						text={todo.text}
						todo={todo}
						id={todo.id}
					/>
				))}
			</ul>
		</div>
	);
};

export default List;
