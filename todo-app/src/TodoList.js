import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
	const [ todos, setTodos ] = useState([]);
	const addTodo = (newTodo) => {
		setTodos((todos) => [ ...todos, { ...newTodo, id: uuid() } ]);
	};
	const removeTodo = (id) => {
		setTodos((todos) => todos.filter((todo) => todo.id !== id));
	};

	return (
		<div className="App">
			<h3>Todos</h3>
			<div className="TodoList-form">
				<NewTodoForm addTodo={addTodo} />
			</div>
			<div className="TodoList">
				<ul>
					{todos.map(({ id, todo }) => (
						<Todo key={id} id={id} removeTodo={removeTodo} todo={todo} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default TodoList;
