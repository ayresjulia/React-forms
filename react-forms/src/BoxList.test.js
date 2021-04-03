import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", () => {
	render(<BoxList />);
});

it("matches snapshot", () => {
	const { asFragment } = render(<BoxList />);
	expect(asFragment()).toMatchSnapshot();
});

it("should add new box with delete button", () => {
	const { queryByText, getByLabelText } = render(<BoxList />);
	const colorInput = getByLabelText("Color");
	const widthInput = getByLabelText("Width");
	const heightInput = getByLabelText("Height");

	const btn = queryByText("Add");

	expect(queryByText("X")).not.toBeInTheDocument();
	fireEvent.change(colorInput, { target: { value: "red" } });
	fireEvent.change(widthInput, { target: { value: "100" } });
	fireEvent.change(heightInput, { target: { value: "100" } });
	fireEvent.click(btn);
	expect(queryByText("X")).toBeInTheDocument();
});

it("should delete a box", () => {
	const { queryByText, getByLabelText } = render(<BoxList />);
	const colorInput = getByLabelText("Color");
	const widthInput = getByLabelText("Width");
	const heightInput = getByLabelText("Height");

	const btn = queryByText("Add");

	expect(queryByText("X")).not.toBeInTheDocument();
	fireEvent.change(colorInput, { target: { value: "red" } });
	fireEvent.change(widthInput, { target: { value: "100" } });
	fireEvent.change(heightInput, { target: { value: "100" } });
	fireEvent.click(btn);
	expect(queryByText("X")).toBeInTheDocument();
	fireEvent.click(queryByText("X"));
	expect(queryByText("X")).not.toBeInTheDocument();
});
