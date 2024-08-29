import React from 'react';
import TemplatePage from '../components/TemplatePage';
import Presentation from '../components/Presentation';

export default function HomePage() {
  return (
    <TemplatePage
      title={'Hernande Monteiro - Web Developer!'}
      description={
        'Conheça Hernande Monteiro, um programador full stack com experiência desde 2019. Especialista em Node.js e React com NextJS, Hernande possui habilidades para desenvolver aplicações web e mobiles de forma robusta e escalável. Saiba mais sobre seu trabalho e projetos aqui.'
      }
      HomeMenu
    >
      <Presentation />
    </TemplatePage>
  );
}
