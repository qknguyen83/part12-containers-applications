import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Todo from './Todo';

test('renders content', () => {
  const todo = {
    text: 'Component testing is done with react-testing-library',
    done: false,
  };

  render(<Todo todo={todo} />);

  const text = screen.getByText(
    'Component testing is done with react-testing-library'
  );
  expect(text).toBeDefined();

  const done = screen.getByText('This todo is not done');
  expect(done).toBeDefined();
});
