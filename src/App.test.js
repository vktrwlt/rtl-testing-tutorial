import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  // Find an element with a  role of button and text of 'change to blue'
  const colorButton = screen.getByRole("button", { name: "change to blue" });

  // expect the bg color to be red

  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button turns blue when clicked", () => {
  render(<App />);

  // Find an element with a  role of button and text of 'change to blue'
  const colorButton = screen.getByRole("button", { name: "change to blue" });

  // click button
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  expect(colorButton.textContent).toBe("change to red");
});

test("initial conditions", () => {
  render(<App />);
  // check that the button starts out enabled

  const colorButton = screen.getByRole("button", { name: "change to blue" });

  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

test("button is disabled when checkbox is checked", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "change to blue" });

  const checkBox = screen.getByRole("checkbox");

  fireEvent.click(checkBox);

  //check if button is disabled
  expect(colorButton).toBeDisabled();

  // uncheck input
  fireEvent.click(checkBox);

  expect(colorButton).toBeEnabled();
});
