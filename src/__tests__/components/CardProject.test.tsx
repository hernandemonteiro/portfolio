import React from 'react';
import { describe, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import CardProject from '../../components/CardProject';

describe('<CardProject/> test', () => {
  it('render', async () => {
    render(<CardProject title={'Card Project Title'} className={'any'} />);

    await screen.findByText('Card Project Title');
  });
});
