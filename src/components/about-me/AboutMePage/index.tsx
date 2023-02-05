import React from "react";
import CardCurriculum from "../CardCurriculum";
import styles from "./AboutMePage.module.scss";
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
} from "react-icons/si";
import SoftSkillElement from "./SoftSkillElement";
import CardProject from "./CardProject";

export default function AboutMePage() {
  return (
    <>
      <div className={styles.presentation}>
        <div className={styles.avatarImg} />

        <div className={"text-center"}>
          <h1 className="text-white">Hernande Monteiro</h1>
          <h4 className="text-white">Full-Stack Developer</h4>
          <div style={{ marginTop: "10%" }}>
            <p className="text-white">
              Apaixonado por tecnologia e inovação! 😍💻📱
              <br />
              Desde de 2019 descobrindo novas maneiras de transformar o mundo
              com a programação.
              <br />
            </p>
            <h4 className="text-white" style={{ marginTop: "10%" }}>
              CONTATOS
              <br />
              <br />
              monteiro1998@live.com
              <br />
              <br />
              41 99917-5718
            </h4>
          </div>
        </div>
      </div>

      <div className="page-height-full">
        <CardCurriculum className={styles.skillsBox} title="Hard-skills">
          <SiHtml5 className="languages-icon" color="orange" />
          <SiCss3 className="languages-icon" color="aqua" />
          <SiJavascript className="languages-icon" color="yellow" />
          <SiTypescript className="languages-icon" color="aqua" />
          <SiNodedotjs className="languages-icon" color="greenyellow" />
          <SiReact className="languages-icon" color="aqua" />
          <SiNextdotjs className="languages-icon" color="white" />
          <SiDocker className="languages-icon" color="aqua" />
          <SiSass className="languages-icon" color="pink" />
          <SiCypress className="languages-icon" color="greenyellow" />
          <SiJest className="languages-icon" color="orangered" />
          <SiGithub className="languages-icon" color="white" />
          <SiGit className="languages-icon" color="orangered" />
          <SiMysql className="languages-icon" color="aqua" />
          <SiPostgresql className="languages-icon" color="white" />
          <SiMongodb className="languages-icon" color="greenyellow" />
          <SiAmazonaws className="languages-icon" color="yellow" />
          <SiGithubactions className="languages-icon" color="orange" />
          <SiSequelize className="languages-icon" color="aqua" />
          <SiPrisma className="languages-icon" color="white" />
        </CardCurriculum>
      </div>
      <div className="page-height-full">
        <CardCurriculum className={styles.skillsBox} title="Soft-skills">
          <SoftSkillElement skill={"Inteligência Emocional"} />
          <SoftSkillElement skill={"Criatividade"} />
          <SoftSkillElement skill={"Autodidata"} />
          <SoftSkillElement skill={"Empatia"} />
          <SoftSkillElement skill={"Trabalho em Equipe"} />
          <SoftSkillElement skill={"Dicotômico"} />
          <SoftSkillElement skill={"Liderança"} />
        </CardCurriculum>
      </div>
      <div className="page-height-full">
        <CardCurriculum className={styles.containerBox} title="Formações">
          <table>
            <thead>
              <tr>
                <th>Curso</th>
                <th>Tipo</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ensino Médio</td>
                <td>Formação</td>
                <td>Concluido</td>
              </tr>
              <tr>
                <td>Eng. da Computação</td>
                <td>Graduação</td>
                <td>Trancado</td>
              </tr>
            </tbody>
          </table>
        </CardCurriculum>
      </div>

      <div className="page-height-full">
        <CardCurriculum className={styles.containerBox} title="Idiomas">
          <table>
            <thead>
              <tr>
                <th>Idioma</th>
                <th>Nivel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Portugês - Brasil</td>
                <td>Fluente</td>
              </tr>
              <tr>
                <td>Inglês</td>
                <td>Intermediário</td>
              </tr>
              <tr>
                <td>Espanhol</td>
                <td>Básico</td>
              </tr>
            </tbody>
          </table>
        </CardCurriculum>
      </div>
      <div className="page-height-full">
        <CardCurriculum className={styles.containerBox} title="Experiências">
          <table>
            <thead>
              <tr>
                <th>Empresa</th>
                <th>Inicio</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              <tr>
                <td>Bellinati Perez - Estágio</td>
                <td>2017</td>
                <td>2017</td>
              </tr>
              <tr>
                <td>Espaço Gourmet</td>
                <td>2018</td>
                <td>2018</td>
              </tr>
              <tr>
                <td>
                  HM Solutions {"("}Freelancer{")"}
                </td>
                <td>2019</td>
                <td>ATUALMENTE</td>
              </tr>
            </tbody>
          </table>
        </CardCurriculum>
      </div>
      <div className="page-height-full">
        <CardCurriculum className={styles.projectBox} title="Projetos">
          <CardProject
            title={"Jobel Embalagens"}
            className={styles.imgProjectJobel}
            to="https://jobel-hernandemonteiro.vercel.app/"
          />
          <CardProject
            title={"UI-Card"}
            className={styles.imgProjectQR}
            to="https://hernandemonteiro.github.io/qrcode-mentor/"
          />
        </CardCurriculum>
      </div>
      {/* <div className={styles.contactBox + " page-height-full"}>
        <label>
          Email
          <p>monteiro1998@live.com</p>
        </label>
        <label>
          Telefone
          <p>monteiro1998@live.com</p>
        </label>
      </div> */}
    </>
  );
}
