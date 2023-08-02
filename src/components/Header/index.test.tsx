import { Header } from "."
import { render, screen,} from '@testing-library/react';
test('renders learn react link', () => {
  render(<Header />);
  const textHeader = screen.getByText(/Search for SkyEng by Nechiporenko/i)
  expect(textHeader).toBeInTheDocument()
});