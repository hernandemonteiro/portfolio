import { render, screen } from '@testing-library/react';
import React from 'react';
import SoftSkillElement from '../../components/SoftSkillElement';

describe('<SoftSkillElement/> test', () => {
  it('render', () => {
    render(<SoftSkillElement skill={'Element'} />);

    screen.getByText('Element');
  });
});
