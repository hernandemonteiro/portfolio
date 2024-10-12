import React from 'react';
import TemplatePage from '../../components/TemplatePage';
import SoftSkills from '../../components/SoftSkills';

function SoftSkillsPage() {
  return (
    <TemplatePage
      title={'Hernande Monteiro - Soft-Skills'}
      description="Conheça aqui todas as Soft-Skills de Hernande Monteiro, que se desenvolve sempre para alcançar um perfil de profissional excelente."
      HomeMenu
    >
      <SoftSkills />
    </TemplatePage>
  );
}

export default SoftSkillsPage;
