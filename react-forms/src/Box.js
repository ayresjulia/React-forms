import React from "react";
import "./Box.css";
import { Button } from "reactstrap";

const Box = ({ id, backgroundColor = "grey", width, height, removeBox }) => {
	const remove = () => removeBox(id);
	return (
		<div>
			<div
				className="Box"
				style={{
					backgroundColor,
					width: `${width}px`,
					height: `${height}px`
				}}
			/>
			<Button onClick={remove}>X</Button>
		</div>
	);
};

export default Box;
