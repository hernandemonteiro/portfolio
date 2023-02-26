import { render, screen } from '@testing-library/react';
import React from 'react';
import AcademicPage from '../../pages/Academic';

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
describe('<AcademicPage/> test', () => {
  it('render', () => {
    render(<AcademicPage />);

    screen.findByRole('table');
    screen.findByText('Curso');
    screen.findByText('Tipo');
    screen.findByText('Status');
  });
});
