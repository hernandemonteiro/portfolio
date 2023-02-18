import React from 'react';
import TemplatePage from '../../components/TemplatePage';
import HardSkills from '../../components/HardSkills';

function HardSkillsPage() {
  return (
    <TemplatePage
      title={'Hernande Monteiro - Hard-Skills'}
      description={
        'Conheça aqui todos os conhecimentos sobre tecnologia de Hernande Monteiro, uma lista de todas as suas habilidades com desenvolvimento.'
      }
      HomeMenu
    >
      <HardSkills />
    </TemplatePage>
  );
}

export default HardSkillsPage;
