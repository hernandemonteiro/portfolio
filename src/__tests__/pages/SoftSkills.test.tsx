import { render, screen } from '@testing-library/react';
import React from 'react';
import SoftSkillsPage from '../../pages/SoftSkills';

describe('<SoftSkillsPage /> test', () => {
  it('render', () => {
    render(<SoftSkillsPage />);

    screen.getByText('Soft-skills');
    screen.getByText('Inteligência Emocional');
  });
});
