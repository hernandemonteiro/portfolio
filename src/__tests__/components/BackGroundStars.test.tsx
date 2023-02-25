import React from 'react';
import { render } from '@testing-library/react';
import { BackgroundStars } from '../../components/BackgroundStars';

describe('<BackGroundStars/> test', () => {
  it('render', () => {
    const { container } = render(<BackgroundStars />);

    const stars = container.getElementsByClassName('star');
    expect(stars.length).toBe(50);
  });
});
