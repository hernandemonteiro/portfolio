import React from 'react';
import CardCurriculum from '../CardCurriculum';
import ModalIcons from '../ModalIcons';
import {
  SiAmazonaws,
  SiCss3,
  SiCypress,
  SiDocker,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSass,
  SiSequelize,
  SiTypescript,
} from 'react-icons/si';
import styles from './HardSkill.module.scss';

function HardSkills() {
  return (
    <div className="page-height-full">
      <CardCurriculum className={styles.skillsBox} title="Hard-skills">
        <p className={'InfoIconClick'}>
          Clique sobre os icones para sabe mais!
        </p>
        <ModalIcons
          icon={<SiHtml5 data-testid={'clickSvgTest'} color="orange" />}
          title={'HTML5'}
          since={2017}
          aboutLanguage={
            <>
              HTML é uma linguagem de marcação para a Web e é uma das principais
              tecnologias da Internet, sua quinta versão se tornou muito popular
              e é utilizada por vários navegadores.
            </>
          }
        />
        <ModalIcons
          icon={<SiCss3 color="aqua" />}
          title={'CSS3'}
          since={2017}
          aboutLanguage={
            <>
              CSS (Cascading Style Sheets) é uma linguagem pela qual se define
              estilos para um projeto web, não considerada uma linguagem de
              programação podemos chamar de linguagem de estilização.
              <br />
              Com efeitos, manipulação de imagem e do DOM podemos alterar
              diversos aspectos de design no layout da página.
            </>
          }
        />
        <ModalIcons
          icon={<SiJavascript color="yellow" />}
          title={'Javascript'}
          since={2018}
          aboutLanguage={
            <>
              Javascript é uma linguagem de alto nível com tipagem dinâmica
              fraca e multiparadigmas.
              <br />
              Juntamente com HTML e CSS, o JavaScript é uma das três principais
              tecnologias da Web.
            </>
          }
        />
        <ModalIcons
          icon={<SiTypescript color="aqua" />}
          since={2019}
          aboutLanguage={
            <>
              TypeScript é uma linguagem de programação de código aberto
              desenvolvida pela Microsoft.
              <br />É um superconjunto sintático estrito de JavaScript e
              adiciona tipagem estática opcional à linguagem.
            </>
          }
          title={'Typescript'}
        />
        <ModalIcons
          icon={<SiNodedotjs color="greenyellow" />}
          title={'NodeJS'}
          since={2019}
          aboutLanguage={
            <>
              Node.js é um software de código aberto, multiplataforma, baseado
              no interpretador V8 do Google e que permite a execução de códigos
              JavaScript fora de um navegador web e a utilização da linguagem
              javascript para desenvolvimento do lado do servidor.
              <br />A principal característica do Node.js é sua arquitetura
              assíncrona e orientada por eventos.
            </>
          }
        />
        <ModalIcons
          icon={<SiReact color="aqua" />}
          title={'React'}
          since={2018}
          aboutLanguage={
            <>
              O React é uma biblioteca Javascript de código aberto criada pela
              empresa Meta.
              <br />
              Com foco em criar interfaces de usuário em páginas web de maneira
              reativa, atualmente é uma das preferidas para desenvolvimento de
              UI{"'"}s.
            </>
          }
        />
        <ModalIcons
          icon={<SiNextdotjs color="white" />}
          title={'NextJS'}
          since={2019}
          aboutLanguage={
            <>
              Next.js é uma estrutura da web de desenvolvimento front-end React
              de código aberto criada pela empresa Vercel que permite
              funcionalidades como renderização do lado do servidor e geração de
              sites estáticos para aplicativos da web baseados em React.
            </>
          }
        />
        <ModalIcons
          icon={<SiDocker color="aqua" />}
          title={'Docker'}
          since={2020}
          aboutLanguage={
            <>
              Docker é um conjunto de produtos de plataforma como serviço que
              usam virtualização de nível de sistema operacional para entregar
              software em pacotes chamados contêineres.
              <br />
              Os contêineres são isolados uns dos outros e agrupam seus próprios
              softwares, bibliotecas e arquivos de configuração.
            </>
          }
        />
        <ModalIcons
          icon={<SiSass color="pink" />}
          title={'Sass'}
          since={2020}
          aboutLanguage={
            <>
              Sass é uma linguagem de folhas de estilo concebida inicialmente
              por Hampton Catlin e desenvolvida por Natalie Weizenbaum.
              <br /> Essa ferramenta da superpoderes ao CSS permitindo utilizar
              mixins, herança, variaveis e outras funcionalidades.
            </>
          }
        />
        <ModalIcons
          icon={<SiCypress color="greenyellow" />}
          title={'Cypress'}
          since={2021}
          aboutLanguage={
            <>
              Cypress é uma ferramenta de teste de front-end para aplicativos da
              web.
              <br />
              O Cypress é executado no Windows, Linux e macOS.
              <br />
              Comparado ao selênio, essa ferramenta permite ao desenvolvedor
              criar testes EndToEnd para melhores entregas.
            </>
          }
        />
        <ModalIcons
          icon={<SiJest color="orangered" />}
          title={'Jest'}
          since={2020}
          aboutLanguage={
            <>
              Jest é uma estrutura de teste de JavaScript construída sobre o
              Jasmine e mantida pela Meta.
              <br />
              Projetado e construído por Christoph Nakazawa com foco na
              simplicidade e suporte para grandes aplicativos da web.
              <br />
              Funciona com projetos usando Babel, TypeScript, Node.js, React,
              Angular, Vue.js e Svelte.
            </>
          }
        />
        <ModalIcons
          icon={<SiGithub color="white" />}
          title={'Github'}
          since={2019}
          aboutLanguage={
            <>
              GitHub é uma plataforma de hospedagem de código-fonte e arquivos
              com controle de versão usando o Git.
              <br />
              Ele permite que programadores, utilitários ou qualquer usuário
              cadastrado na plataforma contribuam em projetos privados e/ou Open
              Source de qualquer lugar do mundo.
            </>
          }
        />
        <ModalIcons
          icon={<SiGit color="orangered" />}
          title={'Git'}
          since={2018}
          aboutLanguage={
            <>
              Git é um sistema de controle de versões distribuído, usado
              principalmente no desenvolvimento de software, mas pode ser usado
              para registrar o histórico de edições de qualquer tipo de arquivo.
              <br />
              Ele permite versionar códigos e pode ser utilizada em conjunto com
              outras ferramentas para disponibilar os repositórios em nuvem.
            </>
          }
        />
        <ModalIcons
          icon={<SiMysql color="aqua" />}
          title={'MySQL'}
          since={2019}
          aboutLanguage={
            <>
              O MySQL é um sistema de gerenciamento de banco de dados, que
              utiliza a linguagem SQL como interface.
              <br />É atualmente um dos sistemas de gerenciamento de bancos de
              dados mais populares da Oracle Corporation, com mais de 10 milhões
              de instalações pelo mundo.
            </>
          }
        />
        <ModalIcons
          icon={<SiPostgresql color="white" />}
          title={'PostgreSQL'}
          since={2019}
          aboutLanguage={
            <>
              PostgreSQL é um sistema gerenciador de banco de dados objeto
              relacional, desenvolvido como projeto de código aberto, tem
              ganhado espaço cada vez mais entre programadores web.
            </>
          }
        />
        <ModalIcons
          icon={<SiMongodb color="greenyellow" />}
          title={'MongoDB'}
          since={2020}
          aboutLanguage={
            <>
              MongoDB é um software de banco de dados orientado a documentos, de
              código aberto e multiplataforma, escrito na linguagem C++.
              <br />
              Classificado como um programa de banco de dados NoSQL, o MongoDB
              usa documentos semelhantes a JSON com esquemas.
            </>
          }
        />
        <ModalIcons
          icon={<SiAmazonaws color="yellow" />}
          title={'AWS'}
          since={2021}
          aboutLanguage={
            <>
              Amazon Web Services, também conhecido como AWS, é uma plataforma
              de serviços de computação em nuvem.
              <br />
              Os serviços são oferecidos em várias áreas geográficas
              distribuídas pelo mundo e permitem colocar aplicações para
              funcionar de maneira escalavel.
            </>
          }
        />
        <ModalIcons
          icon={<SiGithubactions color="orange" />}
          title={'Github Actions'}
          since={2020}
          aboutLanguage={
            <>
              GitHub Actions é uma plataforma de integração contínua e entrega
              contínua (CI/CD) que permite automatizar a sua compilação, testar
              e implantar mais facilmente e de maneira segura.
              <br />É possível criar fluxos de trabalho que criam e testam cada
              pull request no seu repositório, ou implantar pull requests
              mesclados em produção.
            </>
          }
        />

        <ModalIcons
          icon={<SiSequelize color="aqua" />}
          title={'Sequelize'}
          since={2021}
          aboutLanguage={
            <>
              O Sequelize abstrai os comandos de operações de SQL, e faz com que
              possamos usar a linguagem de programação que já estamos usando no
              backend para nos conectarmos e operarmos o banco.
            </>
          }
        />

        <ModalIcons
          icon={<SiPrisma color="white" />}
          title={'Prisma'}
          since={2021}
          aboutLanguage={
            <>
              o Prisma nasceu no ecossistema JavaScript com a promessa de ser
              uma ferramenta que facilita para devs o trabalho com databases.
              <br />
              É um ORM open source de próxima geração cuja arquitetura é
              desenhada em três camadas fundamentais.
              <br />
              Prisma Client: um construtor de queries gerado automaticamente e
              type-safe para Node.js e TypeScript
              <br />
              Prisma Migrate: sistema de migração;
              <br />
              Prisma Studio: o produto principal da tecnologia. Trata-se de uma
              interface do usuário feita para visualizar e editar os dados na
              database;
            </>
          }
        />
      </CardCurriculum>
    </div>
  );
}

export default HardSkills;
