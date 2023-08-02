import { render, screen,} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Search } from '.'

const handleChange = jest.fn
const search = ''
test('Search onChange test', () => {
  render(
  <Search
    handleChange={handleChange}
    search={search} />
    );
   const input = screen.getByRole('textbox')
   userEvent.type(input,'react')
});