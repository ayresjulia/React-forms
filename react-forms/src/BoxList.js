import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";

const BoxList = () => {
	const [ boxes, setBoxes ] = useState([]);
	const addBox = (newBox) => {
		setBoxes((boxes) => [ ...boxes, { ...newBox, id: uuid() } ]);
	};
	const removeBox = (id) => {
		setBoxes((boxes) => boxes.filter((box) => box.id !== id));
	};
	return (
		<div>
			<h3>Colored Boxes</h3>
			<div className="BoxList-form">
				<NewBoxForm addBox={addBox} />
			</div>
			<div className="BoxList">
				{boxes.map(({ id, color, width, height }) => (
					<Box
						key={id}
						id={id}
						backgroundColor={color}
						width={width}
						height={height}
						removeBox={removeBox}
					/>
				))}
			</div>
		</div>
	);
};

export default BoxList;
