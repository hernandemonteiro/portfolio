import React from 'react';
import TemplatePage from '../../components/TemplatePage';
import Projects from '../../components/Projects';

function ProjectsPage() {
  return (
    <TemplatePage
      title="Hernande Monteiro - Projetos (Portfolio)"
      description="Aqui Você encontra os projetos de desenvolvimento em formato de portfolio feitos por Hernande Monteiro, fique a vontade para conhecer mais."
      HomeMenu
    >
      <Projects />
    </TemplatePage>
  );
}

export default ProjectsPage;
