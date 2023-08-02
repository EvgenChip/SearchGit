import { Button } from "."
import { render, screen, fireEvent } from '@testing-library/react';
test('Event Click', () => {
  render(<Button/>);
  const btn = screen.getByTestId('btn noActive')
  expect(btn).toBeInTheDocument()
 fireEvent.click(btn)
});