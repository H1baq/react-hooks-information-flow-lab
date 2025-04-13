import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";

test("displays the toggle button", () => {
  render(<Header onDarkModeClick={() => {}} isDarkMode={false} />);

  expect(screen.queryByText(/ Mode/)).toBeInTheDocument();
});

test("calls the onDarkModeClick callback prop when the button is clicked", () => {
  const onDarkModeClick = jest.fn();
  render(<Header onDarkModeClick={onDarkModeClick}  isDarkMode={false}/>);

  fireEvent.click(screen.queryByText(/ Mode/));
  expect(onDarkModeClick).toHaveBeenCalled();
});