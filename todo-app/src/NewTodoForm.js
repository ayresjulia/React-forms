import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

const NewTodoForm = ({ addTodo }) => {
	const INITIAL_STATE = {
		todo: ""
	};
	const [ formData, setFormData ] = useState(INITIAL_STATE);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo({ ...formData });
		setFormData(INITIAL_STATE);
	};
	return (
		<Form onSubmit={handleSubmit}>
			<Row form>
				<Col md={6}>
					<FormGroup>
						<Label for="todo">New Todo</Label>
						<Input
							type="text"
							name="todo"
							value={formData.todo}
							onChange={handleChange}
						/>
					</FormGroup>
					<Button>Add</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default NewTodoForm;
