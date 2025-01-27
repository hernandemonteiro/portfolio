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
              title={'Virtual Hand Cursor'}
              className={styles.imgVirtualHandCursor}
            />
          }
          projectTitle="Virtual Hand Cursor"
          aboutTheProject={
            <>
              O Virtual Hand Cursor é um projeto inovador que permite controlar
              um cursor virtual apenas com os movimentos da mão. A experiência é
              ainda mais envolvente com a interação sonora, onde um som é
              ativado ao abrir e fechar a mão.
              <br />
              <br />
              Neste projeto, utilizei TensorFlow.js para a detecção das mãos e
              implementei uma interface intuitiva com tecnologia nativa. Foi uma
              ótima oportunidade para aprimorar minhas habilidades em JavaScript
              e explorar novas possibilidades de interação com a tecnologia.
              <br />
              <br />O projeto foi desafiador e gratificante, e estou animado
              para receber feedback e sugestões de melhorias!
            </>
          }
          tecnologiesUsed={[
            'TensorFlow.js',
            'HTML',
            'CSS',
            'JavaScript',
            'GitHub Pages',
          ]}
          projectLink="https://hernandemonteiro.github.io/virtual_hand_cursor/"
          codeLink="https://github.com/hernandemonteiro/virtual_hand_cursor"
        />

        <ProjectModal
          projectCard={
            <CardProject
              title={'PM2 Dashboard'}
              className={styles.imgPM2Dashboard}
            />
          }
          projectTitle="PM2 Dashboard"
          aboutTheProject={
            <>
              O PM2 Dashboard é um dashboard open-source criado para monitorar
              processos que utilizam o gerenciador de processos PM2. Ele oferece
              uma interface amigável para visualização e controle dos processos
              diretamente na máquina onde o projeto está rodando.
              <br />
              <br />
              Neste projeto, fui responsável por todo o desenvolvimento, desde a
              concepção da interface até a implementação da lógica de captura de
              logs do PM2, usando comandos do sistema. Além disso, inclui
              recursos para visualização de informações sobre processos,
              reinicialização e controle dos mesmos, com foco em facilidade de
              uso.
              <br />
              <br />O projeto também suporta variáveis de ambiente para
              personalização (como `PASSWORD` e `PORT`), e foi criado com a
              ideia de ser facilmente hospedado e configurado em servidores
              rodando PM2.
            </>
          }
          tecnologiesUsed={[
            'Node.js',
            'Express',
            'PM2',
            'Typescript',
            'HTML',
            'CSS',
          ]}
          codeLink="https://github.com/hernandemonteiro/node_pm2"
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
        <ProjectModal
          projectCard={
            <CardProject
              title={'Petroplay - Gestão de Concessionárias'}
              className={styles.imgPetroplay}
            />
          }
          projectTitle="Petroplay - Gestão de Concessionárias"
          aboutTheProject={
            <>
              Plataforma chamada Petroplay, desenvolvida para facilitar a gestão
              de atendimentos em concessionárias, especialmente na área de
              manutenção de veículos. O projeto tem como foco otimizar
              processos, organizar agendamentos e melhorar a experiência do
              cliente.
              <br />
              <br />
              Neste projeto, participei ativamente no desenvolvimento backend e
              frontend, criando a lógica de diversas funcionalidades da
              aplicação. Fui responsável por implementar e fazer manutenção de
              algumas rotas das APIs e criação de novas features no frontend.
              Trabalhei também no design da arquitetura backend e a mudança para
              nova linguagem (C#), garantindo escalabilidade, segurança e
              eficiência.
              <br />
              <br />
              Este projeto me permitiu aplicar habilidades avançadas em
              desenvolvimento fullstack e me aprofundar em boas práticas de
              arquitetura de software.
            </>
          }
          tecnologiesUsed={[
            'Node.js',
            'NestJS',
            'Typescript',
            'PostgreSQL',
            'AWS',
            'NextJS',
            'C#',
            '.NET',
          ]}
        />

        <ProjectModal
          projectCard={
            <CardProject
              title={'Petroflow - Gestão de Atendimentos'}
              className={styles.imgPetroflow}
            />
          }
          projectTitle="Petroflow - Gestão de Atendimentos"
          aboutTheProject={
            <>
              Plataforma chamada Petroflow, desenvolvida para facilitar a gestão
              de atendimentos em concessionárias, especialmente na área de
              manutenção de veículos. O projeto tem como foco otimizar
              processos, organizar agendamentos e melhorar a experiência do
              cliente.
              <br />
              <br />
              Neste projeto, participei ativamente no desenvolvimento completo,
              sendo responsável desde o levantamento dos dados até a
              implementação. Trabalhei com desenvolvimento frontend e no design
              da arquitetura backend, garantindo escalabilidade, segurança e
              eficiência.
              <br />
              <br />
              Este projeto me permitiu aplicar habilidades avançadas em
              desenvolvimento fullstack, levantamento de requisitos e me
              aprofundar em boas práticas de desenvolvimento de software.
            </>
          }
          tecnologiesUsed={[
            'Node.js',
            'Express',
            'Typescript',
            'MongoDB',
            'AWS',
            'S3',
            'NextJS',
          ]}
        />
      </CardCurriculum>
    </div>
  );
}

export default Projects;
