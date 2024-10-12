import React from 'react';
import TemplatePage from '../../components/TemplatePage';
import Experience from '../../components/Experience';

export default function ExperiencePage() {
  return (
    <TemplatePage
      title="Hernande Monteiro - Experiências de trabalho"
      description="Experiências de trabalho de Hernande Monteiro, aqui você encontra em quais empresas já trabalhei."
      HomeMenu
    >
      <Experience />
    </TemplatePage>
  );
}
