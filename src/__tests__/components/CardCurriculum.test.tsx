import React from 'react';
import { render, screen } from '@testing-library/react';
import CardCurriculum from '../../components/CardCurriculum';

describe('<CardCurriculum/> test', () => {
  it('render', () => {
    render(
      <CardCurriculum title={'Page Title'}>
        Children Content Inside
      </CardCurriculum>
    );

    screen.findByText('Page Title');
    screen.findByText('Children Content Inside');
  });
});
