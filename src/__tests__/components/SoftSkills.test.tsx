import { render, screen } from '@testing-library/react';
import React from 'react';
import SoftSkills from '../../components/SoftSkills';

describe('<SoftSkills/> test', () => {
  it('render', () => {
    render(<SoftSkills />);
    screen.getByText('Soft-skills');
    screen.getByText('Inteligência Emocional');
  });
});
