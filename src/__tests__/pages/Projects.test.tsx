import { render, screen } from '@testing-library/react';
import React from 'react';
import ProjectsPage from '../../pages/Projects';

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
describe('<ProjectsPage/> test', () => {
  it('render', () => {
    render(<ProjectsPage />);
    screen.getByText('Projetos');
    screen.getByText('Jobel Embalagens');
  });
});
