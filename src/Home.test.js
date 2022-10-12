import { render, screen } from '@testing-library/react';
import Home from './pages/Home.jsx';

test('renders Chez vous, partout et ailleurs', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Chez vous, partout et ailleurs/i);
  expect(linkElement).toBeInTheDocument();
});
