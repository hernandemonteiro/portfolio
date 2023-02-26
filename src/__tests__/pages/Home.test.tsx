import { render, screen } from '@testing-library/react';
import React from 'react';
import HomePage from '../../pages';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));
describe('<HomePage/> test', () => {
  it('render', () => {
    render(<HomePage />);

    screen.getByText('Hernande Monteiro');
  });
});
