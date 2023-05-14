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
              data-testid={'modalButton'}
              title={'Jobel Embalagens'}
              className={styles.imgProjectJobel}
            />
          }
          projectTitle="Jobel Embalagens"
          aboutTheProject={
            <>
              Desenvolvi um site institucional para a empresa Jobel com o
              objetivo de criar uma presença online para a empresa e fornecer
              informações sobre seus produtos e serviços aos clientes em
              potencial.
              <br />
              <br />
              Este site institucional aumentou a visibilidade da empresa online
              e proporcionou uma experiência melhor aos clientes.
            </>
          }
          tecnologiesUsed={[
            'React',
            'Next',
            'Typescript',
            'Jest',
            'Sass',
            'JSX',
            'NodeMailer',
            'Vercel',
          ]}
          projectLink="https://jobel-hernandemonteiro.vercel.app"
        />
        <ProjectModal
          projectCard={
            <CardProject title={'ConvictaPrev'} className={styles.imgConvicta} />
          }
          projectTitle="ConvictaPrev"
          aboutTheProject={
            <>
              A ConvictaPrev é consultoria previdênciaria, o principal ojetivo
              desse projeto é captar clientes e ajudar organizar os atendimentos
              diários da empresa.
              <br />
              <br />
              Neste projeto, fui responsável por desenvolver o design do site,
              escrever o código em NextJS utilizando boas práticas, trabalhar
              com o SEO, realizar os testes e implementar recursos de
              responsividade.
              <br />
              <br />
              Este projeto me permitiu aprimorar minhas habilidades em NextJS e
              aprender um pouco mais sobre a integração de ferramentas de SEO.
            </>
          }
          tecnologiesUsed={[
            'NextJS',
            'React',
            'SASS',
            'Vercel',
            'Jest',
            'React-Icons',
            'Mongoose',
            'MongoDB',
            'Google Analytics'
          ]}
          projectLink="https://www.convictaprev.com.br/"
        />
        <ProjectModal
          projectCard={
            <CardProject
              title={'Challenge React Jr.'}
              className={styles.imgFernandev2}
            />
          }
          projectTitle="Challenge React Jr."
          aboutTheProject={
            <>
              Desenvolvi um projeto como parte de um desafio para uma vaga de
              React Junior. O objetivo deste projeto era demonstrar minhas
              habilidades em programação web e minha compreensão do React.
              <br />
              <br />
              Neste projeto, fui responsável por terminar a implementação da
              pagina de login, adicionando suas funcionalidades guiado por todo
              {"'"}s deixados na pagina.
              <br />
              <br />
              Este projeto me desafiou a aplicar minhas habilidades existentes
              em um projeto real. Aprendi mais sobre a dinâmica de trabalhar em
              grupo, finalizando trabalhos que ficaram para serem finalizados.
            </>
          }
          tecnologiesUsed={['React', 'Hooks', 'Javascript', 'Vercel']}
          projectLink="https://fernandev-react-challenge-02.vercel.app/"
          codeLink="https://github.com/hernandemonteiro/fernandev-react-challenge-02"
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
              Desenvolvi um jogo chamado Secret Word, que tem como objetivo
              testar as habilidades de vocabulário e pensamento rápido dos
              jogadores. Este projeto foi criado para demonstrar minhas
              habilidades em React, Typescript e Sass.
              <br />
              <br />
              Neste projeto, fui responsável pelo design e desenvolvimento do
              jogo Secret Word. Isso incluiu a criação da lógica do jogo, a
              implementação dos recursos de dicas e a programação dos algoritmos
              necessários para garantir que o jogo funcione corretamente.
              <br />
              <br />
              Este projeto foi um desafio para mim e me permitiu aprender muito
              sobre programação e renderização condicional do React.
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
