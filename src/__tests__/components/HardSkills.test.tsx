import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HardSkills from '../../components/HardSkills';

describe('<HardSkills/> test', () => {
  it('render', () => {
    const { container } = render(<HardSkills />);

    screen.findByText('Hard-skills');
    container.getElementsByClassName('InfoIconClick');
    const svgHtmlButton = screen.getByTestId('clickSvgTest');
    fireEvent.click(svgHtmlButton);
    screen.getByText('HTML5');
  });
});
