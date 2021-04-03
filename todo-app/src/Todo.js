import React from "react";
import { Button } from "reactstrap";
import NewTodoForm from "./NewTodoForm";

const Todo = ({ id, todo, removeTodo }) => {
	const remove = () => removeTodo(id);
	return (
		<div>
			<li className="Todo">{todo}</li>
			<Button onClick={remove}>X</Button>
		</div>
	);
};

export default Todo;
