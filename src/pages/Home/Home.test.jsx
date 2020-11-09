import { render } from '@testing-library/react';
import Home from './Home';

test('renders the home page', () => {
  render(<Home />);
  const homeElement = document.querySelector('.home-page');
  expect(homeElement).toBeInTheDocument();
});
