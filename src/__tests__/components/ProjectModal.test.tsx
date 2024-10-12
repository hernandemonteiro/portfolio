import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import ProjectModal from '../../components/ProjectModal';
import CardProject from '../../components/CardProject';

describe('<ProjectModal/> test', () => {
  it('render', () => {
    render(
      <ProjectModal
        projectCard={<CardProject title={'Project Title'} className={'none'} />}
        aboutTheProject={<>This is a block about the project</>}
        tecnologiesUsed={['First Tech', 'Second Tech']}
        projectLink="https://test/code"
        codeLink="https://test.code"
        projectTitle={'Project Title'}
      />
    );
    screen.getByText('Project Title');
    const modalOpenButton = screen.getByRole('button');
    fireEvent.click(modalOpenButton);
    screen.getByText('This is a block about the project');
    screen.getByText('First Tech');
  });
});
