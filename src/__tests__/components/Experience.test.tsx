import React from 'react';
import { render, screen } from '@testing-library/react';
import Experience from '../../components/Experience';

describe('<Experience/> test', () => {
  it('render', () => {
    render(<Experience />);

    screen.findByText("Empresa");
    screen.findByText("Inicio");
    screen.findByText("Status");
    screen.findByText("Experiências");
  });
});
