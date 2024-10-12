import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import HardSkillsPage from '../../pages/HardSkills';

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
describe('<HardSkillsPage/> test', () => {
  it('render', () => {
    const { container } = render(<HardSkillsPage />);
    screen.findByText('Hard-skills');
    container.getElementsByClassName('InfoIconClick');
    const svgHtmlButton = screen.getByTestId('clickSvgTest');
    fireEvent.click(svgHtmlButton);
    screen.getByText('HTML5');
  });
});
