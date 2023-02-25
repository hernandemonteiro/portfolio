import { render, screen } from '@testing-library/react';
import React from 'react';
import Projects from '../../components/Projects';

describe('<Projects/> test', () => {
  it('render', () => {
    render(<Projects />);
    screen.getByText('Projetos');
    screen.getByText('Jobel Embalagens');
  });
});
