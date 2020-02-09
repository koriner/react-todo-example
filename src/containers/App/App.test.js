import React from 'react';
import { renderWithRedux } from 'test-helpers/index';
import App from './App';

test('renders app and app title', () => {
  const { getByText } = renderWithRedux(<App />);
  const titleElement = getByText(/Todo List/i);
  expect(titleElement).toBeInTheDocument();
});
