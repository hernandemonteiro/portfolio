import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import HomeMenu from '../../components/HomeMenu';

describe('<HomeMenu/> test', () => {
  it('render', () => {
    render(<HomeMenu>Page Inside to Show First</HomeMenu>);
    screen.getByText('Page Inside to Show First');
    screen.getByTestId('menuButton');
  });

  it('menu button click', () => {
    render(<HomeMenu>Page Inside to Show First</HomeMenu>);
    screen.getByText('Page Inside to Show First');
    const menuButton = screen.getByTestId('menuButton');
    fireEvent.click(menuButton);
    screen.getByTestId('nav');
  });
});
