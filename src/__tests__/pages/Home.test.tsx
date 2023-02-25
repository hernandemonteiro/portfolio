import { render, screen } from '@testing-library/react';
import React from 'react';
import HomePage from '../../pages';

describe('<HomePage/> test', () => {
  it('render', () => {
    render(<HomePage />);

    screen.getByText('Hernande Monteiro');
  });
});
