import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders navbar with Home link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Início/i);  // Corrigido para um link real
  expect(linkElement).toBeInTheDocument();
});
