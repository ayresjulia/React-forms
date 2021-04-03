import React from "react";
import { render } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", () => {
	render(<TodoList />);
});

it("matches snapshot", () => {
	const { asFragment } = render(<TodoList />);
	expect(asFragment()).toMatchSnapshot();
});

it("should add new todo item", () => {
	const { queryByText, getByLabelText } = render(<TodoList />);
	const input = getByLabelText("New Todo"); // text of the product input
	const btn = queryByText("Add"); // get the button
	expect(queryByText("walk the dog")).not.toBeInTheDocument();
	fireEvent.change(input, { target: { value: "walk the dog" } });
	fireEvent.click(btn);
	expect(queryByText("walk the dog")).toBeInTheDocument();
});
