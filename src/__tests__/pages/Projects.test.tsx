import { render, screen } from '@testing-library/react';
import React from 'react';
import ProjectsPage from '../../pages/Projects';

describe('<ProjectsPage/> test', () => {
  it('render', () => {
    render(<ProjectsPage />);
    screen.getByText('Projetos');
    screen.getByText('Jobel Embalagens');
  });
});
