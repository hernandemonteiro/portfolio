import React from 'react';
import CardCurriculum from '../CardCurriculum';
import CardProject from '../CardProject';
import styles from './Projects.module.scss';
import ProjectModal from '../ProjectModal';

function Projects() {
  return (
    <div className="page-height-full">
      <CardCurriculum className={styles.projectBox} title="Projetos">
        <p className={'InfoIconClick'}>Clique sobre os cards para sabe mais!</p>
        <ProjectModal
          projectCard={
            <CardProject
              title={'Acesso Comercial'}
              className={styles.imgAcesso}
            />
          }
          projectTitle="Acesso Comercial"
          aboutTheProject={
            <>
              Acesso comercial é uma empresa que fornece uma interface para que
              pessoas que não tenham conhecimento em programação possam ter sua
              loja online e aproveitar de nvoas tecnologias.
              <br />
              <br />
              Neste projeto, fui responsável por desenvolver o blog da empresa,
              do zero, foi uma ótima forma de colocar meus conhecimentos em
              prática, onde conheci a empresa e prestei outros serviços, como
              uma plataforma de controle que permite atendimento multicontas.
              <br />
              <br />O projeto me permitiu aprimorar minhas habilidades em NextJS
              e aprender um pouco mais sobre a integração com GraphQL usando
              apollo.
            </>
          }
          tecnologiesUsed={[
            'NextJS',
            'React',
            'Styled-Components',
            'Jest',
            'React-Icons',
            'Mongoose',
            'MongoDB',
            'GraphQL',
          ]}
          projectLink="https://blog.acessocomercial.com/"
        />
        <ProjectModal
          projectCard={
            <CardProject
              title={'Secret Word Game'}
              className={styles.imgSecretWord}
            />
          }
          projectTitle="Secret Word Game"
          aboutTheProject={
            <>
              Jogo chamado Secret Word, que tem como objetivo testar as
              habilidades de vocabulário e pensamento rápido dos jogadores. Este
              projeto foi criado para demonstrar minhas habilidades em React,
              Typescript e Sass.
              <br />
              <br />
              Neste projeto, fui responsável pelo design e desenvolvimento do
              jogo Secret Word. Isso incluiu a criação da lógica do jogo, a
              implementação dos recursos de dicas e a programação dos algoritmos
              necessários para garantir que o jogo funcione corretamente.
              <br />
              <br />
              Este projeto me permitiu treinar um pouco sobre programação
              enquanto criei um jogo engraçado para meus sobrinhos jogarem.
            </>
          }
          tecnologiesUsed={['React', 'Typescript', 'JSX', 'Sass', 'Vercel']}
          projectLink="https://secret-word-zeta.vercel.app/"
          codeLink="https://github.com/hernandemonteiro/secret_word"
        />
      </CardCurriculum>
    </div>
  );
}

export default Projects;
