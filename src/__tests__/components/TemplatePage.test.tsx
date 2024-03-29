import { render, screen } from '@testing-library/react';
import React from 'react';
import TemplatePage from '../../components/TemplatePage';

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
describe('<TemplatePage/> test', () => {
  it('render without menu', () => {
    render(
      <TemplatePage title={'Page Title'} description={'Description Tag'}>
        Content
      </TemplatePage>
    );
    screen.getByText('Content');
  });
  it('render with menu', () => {
    render(
      <TemplatePage
        title={'Page Title'}
        HomeMenu
        description={'Description Tag'}
      >
        Content
      </TemplatePage>
    );

    screen.getByRole('button');
  });
});
