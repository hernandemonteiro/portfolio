import React from 'react';
import TemplatePage from '../../components/TemplatePage';
import Academic from '../../components/Academic';

function AcademicPage() {
  return (
    <TemplatePage
      HomeMenu
      title="Hernande Monteiro - Formações"
      description="Cursos e Formações de Hernande Monteiro, aqui você sabe um pouco sobre a trajetória de estudo de Hernande."
    >
      <Academic />
    </TemplatePage>
  );
}

export default AcademicPage;
