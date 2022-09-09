import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("render Hello", () => {
    render(<Greeting />);

    const helloElement = screen.getByText("Hello Word");
    expect(helloElement).toBeInTheDocument();
  });

  test("renders good to see you if btn was NOT click", () => {
    render(<Greeting />);

    const textElement = screen.getByText("It`s good to see you");
    expect(textElement).toBeInTheDocument();
  });

  test("renders Changed if the btn WAS click", () => {
    render(<Greeting />);

    // Act
    const btn = screen.getByRole("button");
    userEvent.click(btn);

    const textElement = screen.getByText("Changed!");
    expect(textElement).toBeInTheDocument();
  });

  test("does not render good if the btn WAS click", () => {
    render(<Greeting />);

    // Act
    const btn = screen.getByRole("button");
    userEvent.click(btn);

    const textElement = screen.queryByText("It`s good to see you");
    expect(textElement).toBeNull();
  });
});
