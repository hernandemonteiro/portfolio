import { render, screen } from '@testing-library/react';
import React from 'react';
import Presentation from '../../components/Presentation';

describe('<Presentation/> test', () => {
  it('render', () => {
    render(<Presentation />);

    screen.getByText('Hernande Monteiro');
    screen.getByTestId('avatarImgTest');
  });
});
