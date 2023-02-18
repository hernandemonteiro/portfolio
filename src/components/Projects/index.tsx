import React from 'react';
import CardCurriculum from '../CardCurriculum';
import CardProject from '../CardProject';
import styles from './Projects.module.scss';

function Projects() {
  return (
    <div className="page-height-full">
      <CardCurriculum className={styles.projectBox} title="Projetos">
        <CardProject
          title={'Jobel Embalagens'}
          className={styles.imgProjectJobel}
          to="https://jobel-hernandemonteiro.vercel.app/"
        />
        <CardProject
          title={'UI-Card'}
          className={styles.imgProjectQR}
          to="https://hernandemonteiro.github.io/qrcode-mentor/"
        />
      </CardCurriculum>
    </div>
  );
}

export default Projects;
