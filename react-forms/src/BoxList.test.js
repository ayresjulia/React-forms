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

it("should add new item", () => {
	const { queryByText, getByLabelText } = render(<ShoppingList />);
	const input = getByLabelText("Color");
	const btn = queryByText("Add");
	expect(queryByText("Product Name : Chocolate")).not.toBeInTheDocument();
	fireEvent.change(input, { target: { value: "Chocolate" } });
	fireEvent.click(btn); // submit the form
	expect(queryByText("Product Name : Chocolate")).toBeInTheDocument();
});
