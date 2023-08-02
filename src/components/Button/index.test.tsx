import { Button } from ".";
import { render, screen, fireEvent } from "@testing-library/react";

const sortChange = jest.fn;
const sortActive = false;
test("Event Click ", () => {
  render(<Button sortChange={sortChange} sortActive={sortActive} />);
  const btn = screen.getByTestId("btn noActive");
  expect(btn).toBeInTheDocument();
  fireEvent.click(btn);
});
