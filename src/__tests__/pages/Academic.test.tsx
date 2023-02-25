import { render, screen } from '@testing-library/react';
import React from 'react';
import AcademicPage from '../../pages/Academic';

describe('<AcademicPage/> test', () => {
  it('render', () => {
    render(<AcademicPage />);

    screen.findByRole('table');
    screen.findByText('Curso');
    screen.findByText('Tipo');
    screen.findByText('Status');
  });
});
