import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

const NewBoxForm = ({ addBox }) => {
	const INITIAL_STATE = {
		color: "",
		width: "",
		height: ""
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
		addBox({ ...formData });
		setFormData(INITIAL_STATE);
	};
	return (
		<Form onSubmit={handleSubmit}>
			<Row form>
				<Col md={12}>
					<FormGroup>
						<Label for="color">Color</Label>
						<Input
							type="text"
							name="color"
							value={formData.color}
							onChange={handleChange}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="examplePassword">Width</Label>
						<Input
							type="text"
							name="width"
							value={formData.width}
							onChange={handleChange}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="height">Height</Label>
						<Input
							type="text"
							name="height"
							value={formData.height}
							onChange={handleChange}
						/>
					</FormGroup>
					<Button>Add</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default NewBoxForm;
