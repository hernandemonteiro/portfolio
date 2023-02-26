import { render, screen } from '@testing-library/react';
import React from 'react';
import SoftSkillsPage from '../../pages/SoftSkills';

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
describe('<SoftSkillsPage /> test', () => {
  it('render', () => {
    render(<SoftSkillsPage />);

    screen.getByText('Soft-skills');
    screen.getByText('Inteligência Emocional');
  });
});
