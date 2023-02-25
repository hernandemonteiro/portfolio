import { render, screen } from '@testing-library/react';
import React from 'react';
import ExperiencePage from '../../pages/Experience';

describe('<ExperiencePage/> test', () => {
  it('render', () => {
    render(<ExperiencePage />);

    screen.findByText('Empresa');
    screen.findByText('Inicio');
    screen.findByText('Status');
    screen.findByText('Experiências');
  });
});
