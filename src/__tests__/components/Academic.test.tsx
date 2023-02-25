import React from 'react';
import { render, screen } from '@testing-library/react';
import Academic from '../../components/Academic';

describe('<Academic/> test', () => {
  it('correct render', () => {
    render(<Academic />);
    
    screen.findByRole('table');
    screen.findByText('Curso');
    screen.findByText('Tipo');
    screen.findByText('Status');
  });
});
